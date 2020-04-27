import React from "react";
const onChange = (event) => {
  console.log(event);
};
const TextBox = ({ input, onFormChange }) => {
  const { type, placeholder, name, label } = input;

  return (
    <div className="text-box">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange()}
      ></input>
    </div>
  );
};

export default TextBox;
