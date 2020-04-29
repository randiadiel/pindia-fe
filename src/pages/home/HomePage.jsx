import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthServices from "../../auth/AuthServices";

class HomePage extends Component {
  state = {
    user: {},
  };
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("userInfo")).data;
    if (user) {
      this.setState({ user });
    }
  }
  handleLogout = () => {
    AuthServices.logout();
    this.setState({ user: {} });
  };
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        {!this.state.user ? (
          <Link to="login">Login</Link>
        ) : (
          <button onClick={this.handleLogout}>Logout</button>
        )}
        <Link to="register">Register</Link>
        {this.state.user.role === 1 && (
          <Link to="shop/create">Create Shop</Link>
        )}
        {JSON.stringify(this.state.user)}
      </div>
    );
  }
}

export default HomePage;
