import { endpoints } from "../configs";
import { setCookie, getUrlParameter } from "../lib/helper";
import { apiClient } from "../apiClient/index";
import { toast } from "react-toastify";
import history from "../history";


 function _userLogin(data, redirect = false) {
    console.log(data, '-----');
    // let datas = {"records":{"emis_username":"state","emis_password":"spdssa2018"}}
    let datas = {data}
    return apiClient
      .post(endpoints().userLogin, datas)
      .then(response => {
        console.log(response, 'upload success');
        alert("SUCC");
      })
      .catch(error => {
        console.log(error, 'error');
        alert(error);
      });
  }
  export default _userLogin;