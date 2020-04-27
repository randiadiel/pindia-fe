import React, { Component } from "react";

class TextBox extends Component {
  render() {
    const { input, value, onChange } = this.props;
    const { type, placeholder, name, label } = input;
    return (
      <div className="text-box">
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        ></input>
      </div>
    );
  }
}

export default TextBox;
