import React, { Component } from "react";
import TextBox from "../../components/common/input/TextBox";
import { inputs } from "./CreateShopConfig";
import Api from "../../api/Api";
import TextArea from "../../components/common/input/TextArea";
import { Link, Redirect } from "react-router-dom";
import Alert from "../../components/common/alert/Alert";
import AuthServices from "../../auth/AuthServices";

class CreateShop extends Component {
  state = {
    name: "",
    address: "",
    status: false,
    message: "",
    unauthorized: false,
  };
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, address } = this.state;
    const shop = {
      name,
      address,
    };
    const { status, message } = await Api.handlePost("/shops", shop, true);
    if (status === 200) {
      this.setState({ success: true });
      this.setState({ message });
    } else if (status === 401) {
      this.setState({ message });
    } else {
      AuthServices.logout();
      this.setState({ unauthorized: true });
    }
  };
  render() {
    if (this.state.status === true) {
      return (
        <div>
          <h1>Success!</h1>
          <Link to="/home">Home</Link>
        </div>
      );
    }
    if (this.state.unauthorized === true) {
      return <Redirect to="/login"></Redirect>;
    }
    return (
      <div className="create-shop">
        <Alert
          visible={this.state.message === "" ? false : true}
          message={this.state.message}
        ></Alert>
        <form onSubmit={this.handleSubmit}>
          <TextBox
            input={inputs.name}
            onChange={this.onChange}
            value={this.state.name}
          ></TextBox>
          <TextArea
            input={inputs.address}
            onChange={this.onChange}
            value={this.state.address}
          ></TextArea>
          <input type="submit" value="Create"></input>
        </form>
      </div>
    );
  }
}

export default CreateShop;
