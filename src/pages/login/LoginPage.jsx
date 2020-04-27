import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextBox from "../../components/common/input/TextBox";
import { inputs } from "./LoginPageConfig";
import Logo from "../../assets/logo.png";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };
  onChange = (e) => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <div className="login-page container-fluid">
        <div className="row">
          <div className="col-lg-6 form-box">
            <div className="container">
              <Link to="/">
                <img src={Logo} alt="logo-pindia"></img>
              </Link>
              <form className="container">
                <h1>Login to your account</h1>
                {inputs.map((input) => (
                  <TextBox
                    key={input.id}
                    input={input}
                    onChange={this.onChange}
                    value={this.state[input.name]}
                  ></TextBox>
                ))}
              </form>
            </div>
          </div>
          <div className="col-lg-6 image">
            <div className="layer"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
