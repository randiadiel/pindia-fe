import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/common/NavBar";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <NavBar></NavBar>
        <h1>HomePage</h1>
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
      </div>
    );
  }
}

export default HomePage;
