import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextBox from "../../components/common/input/TextBox";
import Logo from "../../assets/logo.png";
import inputs from "./RegisterPageConfig";
import "../../api/ApiConfig";

class RegisterPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirm: "",
  };
  onChange = (e) => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.firstName);
  };
  render() {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirm,
    } = inputs;
    return (
      <div className="register-page container-fluid">
        <div className="row">
          <div className="col-lg-6 form-box">
            <div className="container">
              <Link to="/">
                <img src={Logo} alt="logo-pindia"></img>
              </Link>
              <form className="container" onSubmit={this.handleSubmit}>
                <h1>Join us now!</h1>
                <div className="row">
                  <div className="col-6">
                    <TextBox
                      onChange={this.onChange}
                      input={firstName}
                      value={this.state.firstName}
                    ></TextBox>
                  </div>
                  <div className="col-6">
                    <TextBox
                      onChange={this.onChange}
                      input={lastName}
                      value={this.state.lastName}
                    ></TextBox>
                  </div>
                </div>
                <TextBox
                  onChange={this.onChange}
                  input={email}
                  value={this.state.email}
                ></TextBox>
                <TextBox
                  onChange={this.onChange}
                  input={phoneNumber}
                  value={this.state.phoneNumber}
                ></TextBox>
                <TextBox
                  onChange={this.onChange}
                  input={password}
                  value={this.state.password}
                ></TextBox>
                <TextBox
                  onChange={this.onChange}
                  input={confirm}
                  value={this.state.confirm}
                ></TextBox>
                <input
                  type="submit"
                  value="Register"
                  className="registerButton"
                ></input>
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

export default RegisterPage;
