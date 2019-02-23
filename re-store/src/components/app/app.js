import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";

const App = () => {

  return (
    <div>
      <h2>App</h2>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/cart" component={CartPage}/>
      </Switch>
    </div>
  );
};

export default App;