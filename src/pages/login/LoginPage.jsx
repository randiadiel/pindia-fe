import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextBox from "../../components/common/input/TextBox";
import Alert from "../../components/common/alert/Alert";
import { inputs } from "./LoginPageConfig";
import Logo from "../../assets/logo.png";
import AuthServices from "../../auth/AuthServices";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    message: "",
    error: false,
  };
  onChange = (e) => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const credential = {
      email,
      password,
    };
    const promise = await AuthServices.login(credential);
    const { status, message, result } = promise.data;
    if (status === 200) {
      localStorage.setItem("userInfo", JSON.stringify(result));
    } else {
      this.setState({ error: true });
      this.setState({ message });
    }
  };

  render() {
    return (
      <div className="login-page container-fluid">
        <div className="row">
          <div className="col-lg-6 form-box">
            <div className="container">
              <Link to="/">
                <img src={Logo} alt="logo-pindia"></img>
              </Link>
              <form className="container" onSubmit={this.handleSubmit}>
                <Alert
                  visible={this.state.error}
                  message={this.state.message}
                ></Alert>
                <h1>Login to your account</h1>
                {inputs.map((input) => (
                  <TextBox
                    key={input.id}
                    input={input}
                    onChange={this.onChange}
                    value={this.state[input.name]}
                  ></TextBox>
                ))}
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

export default LoginPage;
