import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

class RegisterPage extends Component {
  render() {
    return (
      <div className="register-page container-fluid">
        <div className="row">
          <div className="col-lg-6 form-box">
            <div className="container">
              <Link to="/">
                <img src={Logo} alt="logo-pindia"></img>
              </Link>
              <form className="container">
                <h1>Join us now!</h1>
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
