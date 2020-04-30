import React, { Component } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar container-fluid">
        <div className="row navBar-row">
          <div className="col-md-2 logo">
            <Link to="/">
              <img src={Logo} alt="logo-pindia"></img>
            </Link>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 searchBar">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search for items, brands, and shops"
              aria-label="Search"
            ></input>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 links">
            <div className="en-logo">en</div>
            <div className="cart-logo"></div>
            <div className="R-logo"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
