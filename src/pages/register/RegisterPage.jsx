import React, { Component } from "react";
import TextBox from "../../components/common/input/TextBox";
import { inputs } from "./RegisterPageConfig";

class RegisterPage extends Component {
  render() {
    return (
      <div className="register-page">
        <div className="form-box">
          {inputs.map((input) => (
            <TextBox input={input}></TextBox>
          ))}
        </div>
      </div>
    );
  }
}

export default RegisterPage;
