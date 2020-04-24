import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
      </div>
    );
  }
}

export default HomePage;
