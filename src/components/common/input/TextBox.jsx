import React from "react";

const TextBox = ({ textbox }) => {
  const { icon, type, placeholder, name } = textbox;
  return (
    <div className="text-box">
      <i className={`fa ${icon}`} aria-hidden="true"></i>
      <input type={type} placeholder={placeholder} name={name}></input>
    </div>
  );
};

export default TextBox;
