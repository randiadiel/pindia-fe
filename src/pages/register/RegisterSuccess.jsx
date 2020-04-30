import React from "react";
import { Link } from "react-router-dom";

const RegisterSuccess = ({ message }) => {
  return (
    <div className="register-success">
      <h1>{message}</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default RegisterSuccess;
