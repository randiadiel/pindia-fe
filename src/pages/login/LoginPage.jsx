import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import TextBox from "../../components/common/input/TextBox";
import Alert from "../../components/common/alert/Alert";
import { inputs } from "./LoginPageConfig";
import Logo from "../../assets/logo.png";
import AuthServices from "../../auth/AuthServices";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    success: false,
    message: "",
    isLoggedIn: false,
  };
  componentDidMount() {
    if (localStorage.getItem("userInfo")) {
      this.setState({ isLoggedIn: true });
    }
  }
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
    console.log(promise);
    const { status, data } = promise;
    const { access_token, message } = data;
    console.log(access_token);
    if (status === 200) {
      localStorage.setItem("userInfo", JSON.stringify(data));
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ message });
    }
  };

  render() {
    if (isLoggedIn) {
      return <Redirect to="/"></Redirect>;
    }
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
                  visible={this.state.message === "" ? false : true}
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
                <input
                  className="loginButton"
                  type="submit"
                  value="Login"
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

export default LoginPage;
