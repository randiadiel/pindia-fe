import React, { Component } from "react";

class TextArea extends Component {
  render() {
    const { input, onChange } = this.props;
    const { name, label, placeholder } = input;
    return (
      <div className="text-area">
        <label htmlFor={name}>{label}</label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        ></textarea>
      </div>
    );
  }
}

export default TextArea;
