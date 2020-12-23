import React from "react";
import Captcha from "react-numeric-captcha";

import "../Login/captcha.css";
// API call
import Form from "../../component/Form";
import Email from "../../component/Email";
import Password from "../../component/Password";
import _userLogin from "../../actions/login";
import {
  Card,
  Container,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

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
