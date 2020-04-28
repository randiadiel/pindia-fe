import React from "react";

const Alert = ({ message, visible }) => {
  if (visible === false) return <div></div>;
  else
    return (
      <div className="alert alert-danger" role="alert">
        {message}
      </div>
    );
};

export default Alert;
