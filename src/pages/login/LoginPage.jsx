import React, { Component } from "react";
import TextBox from "../../components/common/input/TextBox";
import { inputs } from "./LoginPageConfig";

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="form-box">
          {inputs.map((input) => (
            <TextBox input={input}></TextBox>
          ))}
        </div>
      </div>
    );
  }
}

export default LoginPage;
