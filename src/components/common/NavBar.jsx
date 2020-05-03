import React, { Component } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import CartLogo from "../../assets/cart.svg";
import RLogo from "../../assets/R-logo.svg";
import EnLogo from "../../assets/en-logo.svg";
import SearchLogo from "../../assets/search.svg";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar container-fluid">
        <div className="row navBar-row">
          <div className="col-md-2 logo">
            <Link to="/">
              <img className="logo-pindia" src={Logo} alt="logo-pindia"></img>
            </Link>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 searchBar">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search for items, brands, and shops"
            ></input>
            <Link to="/">
              <img className="logo-search" src={SearchLogo}></img>
            </Link>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 links">
            <div className="en-logo">
              <Link to="/">
                <img className="logo-en" src={EnLogo}></img>
              </Link>
            </div>
            <div className="cart-logo">
              <Link to="/">
                <img className="logo-cart" src={CartLogo}></img>
              </Link>
            </div>
            <div className="R-logo">
              <Link to="/">
                <img className="logo-R" src={RLogo}></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
