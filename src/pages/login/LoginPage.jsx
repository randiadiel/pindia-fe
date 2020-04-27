import React, { Component } from "react";
import TextBox from "../../components/common/input/TextBox";
import { inputs } from "./LoginPageConfig";

class LoginPage extends Component {
  login = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div className="login-page">
        <div className="form-box">
          <form onSubmit={this.login}>
            {inputs.map((input) => (
              <TextBox
                key={input.placeholder}
                input={input}
                onFormChange={this.handleFormChange}
              ></TextBox>
            ))}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
