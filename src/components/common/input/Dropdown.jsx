import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    const { input, onChange } = this.props;
    const { label, options, name, placeholder } = input;
    return (
      <div className="dropdown">
        <label htmlFor={name}>{label}</label>
        <select
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Dropdown;
