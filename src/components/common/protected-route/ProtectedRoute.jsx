import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthServices from "../../../auth/AuthServices";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      AuthServices.getUserInfo() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default ProtectedRoute;
