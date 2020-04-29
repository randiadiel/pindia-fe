import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthServices from "../../auth/AuthServices";

class HomePage extends Component {
  handleLogout = () => {
    AuthServices.logout();
  };
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
        <Link to="shop/create">Create Shop</Link>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default HomePage;
