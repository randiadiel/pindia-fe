import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ProtectedRoute from "./components/common/protected-route/ProtectedRoute";
import CreateShop from "./pages/shop/CreateShop";
import "./style/index.scss";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/login" component={LoginPage}></Route>
      <Route exact path="/register" component={RegisterPage}></Route>
      <ProtectedRoute
        exact
        path="/shop/create"
        component={CreateShop}
      ></ProtectedRoute>
    </Switch>
  );
}

export default App;
