import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/common/NavBar";
import Banner from "../../components/common/Banner";
import AuthServices from "../../auth/AuthServices";
import Api, { API } from "../../api/Api";

class HomePage extends Component {
  state = {
    user: {
      role: 0,
    },
    term: "",
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
  onSubmit = (e) => {
    e.preventDefault();
    const term = e.target[0].value;
    this.setState({ term });
    console.log(this.state.term);
    const params = {
      q: "jambu",
    };
    const searchResponse = Api.handleGetParams(
      "/products/search",
      params,
      true
    );
    console.log(searchResponse);
  };
  render() {
    // if (this.state.term !== "") {
    //   return;
    // }
    return (
      <div className="home-page">
        <form onSubmit={this.onSubmit}>
          <NavBar></NavBar>
        </form>
        <Banner></Banner>
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
