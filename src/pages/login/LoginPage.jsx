import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        Login Page
        <Link to="/">To Home</Link>
      </div>
    );
  }
}

export default LoginPage;
