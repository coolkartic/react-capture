import React from "react";
import Captcha from "react-numeric-captcha";

import "../Login/captcha.css";
// API call
import { apiClient } from "../../apiClient/index";
import Form from "../../component/Form";
import Email from "../../component/Email";
import Password from "../../component/Password";
// Configs
import { endpoints, DEFAULT_API_KEY } from "../../configs";
import { getCookie, setCookie, getUrlParameter } from "../../lib/helper";
import {
  Card,
  CardImg,
  Container,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import { toast } from "react-toastify";

export function _userLogin(data, redirect = false) {
  console.log(data);
  return apiClient
    .post(endpoints().userLogin, data)
    .then((response) => {
      let successMessage;
      if (response && response.data) {
        successMessage = response.data.message;
      }

      const { token, userId } = response.data;

      setCookie("session_token", token);
      setCookie("userId", userId);

      if (!redirect) {
        const redirectUrl = getUrlParameter("redirect");

        if (redirectUrl) {
          window.location.replace(redirectUrl);
        } else {
          window.location.replace("/dashboard");
        }
      }

      return { successMessage } || {};
    })
    .catch((error) => {
      if (error.response && error.response.status >= 400) {
        let errorMessage;
        const errorRequest = error.response.request;
        if (errorRequest && errorRequest.response) {
          errorMessage = JSON.parse(errorRequest.response).message;
          toast.error(errorMessage);
        }
        return { errorMessage } || {};
      }
    });
}

class Login extends React.Component {
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }
  state = {
    captchaSuccess: false,
  };
  render() {
    const { captchaSuccess } = this.state;
    return (
      <div className="App">
        <Container>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Login</CardTitle>

              <div>
                <Form
                  onSubmit={(values) => {
                    values.email = values.email ? values.email : null;
                    values.password = values.password ? values.password : null;

                    _userLogin(values);
                  }}
                >
                  <div className={["field-wrapper"].join("")}>
                    <Email
                      name="email"
                      placeholder="Email Address"
                      onKeyDown={this._hideErrorMessage}
                      required
                    />
                  </div>

                  <div className={["field-wrapper"].join(" ")}>
                    <Captcha
                      onChange={(status) =>
                        this.setState({ captchaSuccess: status })
                      }
                    />
                    <br />
                    <button type="submit" disabled={!captchaSuccess}>
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}
export default Login;
