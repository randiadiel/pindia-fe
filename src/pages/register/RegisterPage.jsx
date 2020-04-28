import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextBox from "../../components/common/input/TextBox";
import Dropdown from "../../components/common/input/Dropdown";
import Api from "../../api/Api";
import Logo from "../../assets/logo.png";
import inputs from "./RegisterPageConfig";
import "../../api/ApiConfig";
import TextArea from "../../components/common/input/TextArea";
import RegisterSuccess from "./RegisterSuccess";

class RegisterPage extends Component {
  state = {
    success: false,
    message: "",
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    password: "",
    confirm: "",
    gender: "Male",
    birthday: "",
    address: "",
  };
  onChange = (e) => {
    const target = e.target;
    this.setState({
      [target.name]:
        target.type === "select" ? target.selectedIndex : target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      telephone,
      password,
      confirm,
      gender,
      birthday,
      address,
    } = this.state;
    if (password === confirm) {
      const registered = {
        name: firstName + " " + lastName,
        email,
        telephone,
        password,
        gender,
        birthday,
        address,
      };
      const { status, message } = await Api.handlePost(
        "/users/create",
        registered
      );
      if (status === 200) {
        this.setState({ success: true, message });
      } else this.setState({ message });
    } else alert("Password doesn't match");
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      telephone,
      password,
      confirm,
      gender,
      birthday,
      address,
    } = inputs;
    if (this.state.success === true)
      return <RegisterSuccess message={this.state.message}></RegisterSuccess>;
    return (
      <div className="register-page container-fluid">
        <div className="row">
          <div className="col-lg-6 form-box">
            <div className="container">
              <Link to="/">
                <img src={Logo} alt="logo-pindia"></img>
              </Link>
              <form className="container" onSubmit={this.handleSubmit}>
                <h1>Join us now!</h1>
                <div className="row">
                  <div className="col-6">
                    <TextBox
                      onChange={this.onChange}
                      input={firstName}
                      value={this.state.firstName}
                    ></TextBox>
                  </div>
                  <div className="col-6">
                    <TextBox
                      onChange={this.onChange}
                      input={lastName}
                      value={this.state.lastName}
                    ></TextBox>
                  </div>
                </div>
                <TextBox
                  onChange={this.onChange}
                  input={email}
                  value={this.state.email}
                ></TextBox>
                <TextBox
                  onChange={this.onChange}
                  input={telephone}
                  value={this.state.phoneNumber}
                ></TextBox>
                <div className="row">
                  <div className="col-6">
                    <Dropdown
                      onChange={this.onChange}
                      input={gender}
                      selected={this.state.gender}
                    ></Dropdown>
                  </div>
                  <div className="col-6">
                    <TextBox
                      onChange={this.onChange}
                      input={birthday}
                      value={this.state.birthday}
                    ></TextBox>
                  </div>
                </div>
                <TextArea
                  onChange={this.onChange}
                  input={address}
                  value={this.state.address}
                ></TextArea>
                <TextBox
                  onChange={this.onChange}
                  input={password}
                  value={this.state.password}
                ></TextBox>
                <TextBox
                  onChange={this.onChange}
                  input={confirm}
                  value={this.state.confirm}
                ></TextBox>
                <input
                  type="submit"
                  value="Register"
                  className="registerButton"
                ></input>
              </form>
            </div>
          </div>
          <div className="col-lg-6 image">
            <div className="layer">
              <div className="quotes">
                <div className="doubleQuotes"></div>
                <h4>LIFE'S TOO SHORT</h4>
                <h1>TO WEAR BORING CLOTHES.</h1>
                <h5>- CARLY CUSHNIE AND MICHELLE OCHS,</h5>
                <h5> CUSHINE ET OCHS -</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
