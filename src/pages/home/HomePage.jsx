import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthServices from "../../auth/AuthServices";

class HomePage extends Component {
  state = {
    user: {
      role: 0,
    },
  };
  componentDidMount() {
    const response = localStorage.getItem("userInfo");
    if (response) {
      const user = JSON.parse(response).data;
      this.setState({ user });
    } else {
      this.handleLogout();
    }
  }
  handleLogout = () => {
    AuthServices.logout();
    this.setState({ user: { role: 0 } });
  };
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        {this.state.user.role === 0 ? (
          <React.Fragment>
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button onClick={this.handleLogout}>Logout</button>
            <Link to="shop">Go To Shop</Link>
          </React.Fragment>
        )}
        {this.state.user.role === 1 && (
          <Link to="shop/create">Create Shop</Link>
        )}
        {JSON.stringify(this.state.user)}
      </div>
    );
  }
}

export default HomePage;
