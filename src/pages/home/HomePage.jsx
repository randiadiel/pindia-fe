import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import NavBar from "../../components/common/NavBar";
||||||| cdccec9
=======
import AuthServices from "../../auth/AuthServices";
>>>>>>> 1894f958bcf0ed50a1814c1dc5025d2c66fdaec5

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
      <div className="home-page">
        <NavBar></NavBar>
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
