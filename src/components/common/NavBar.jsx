import React, { Component } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import CartLogo from "../../assets/cart.svg";
import SearchLogo from "../../assets/search.svg";

class NavBar extends Component {
  state = {
    term: "",
  };
  onChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
  };
  render() {
    return (
      <div className="navbar container">
        <nav>
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo-Pindia" />
            </Link>
          </div>
          <div className="search-bar">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search for items, brands, and shops"
              onChange={this.onChange}
              value={this.state.term}
            ></input>
            {this.state.term === "" && (
              <img className="logo-search" src={SearchLogo} alt="search"></img>
            )}
          </div>
          <div>
            <div className="profile-section">
              <Link to="/">
                <h4 className="mx-2">en</h4>
              </Link>
              <Link to="/">
                <img className="logo-cart mx-2" src={CartLogo} alt="cartLogo" />
              </Link>
              <div className="profile-logo mx-2">
                <Link to="/">
                  <h5 className="profile-initial">A</h5>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
