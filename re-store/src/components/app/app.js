import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import ShopHeader from "../shop-header";

const App = () => {

  return (
    <main role="main" className="app container">
      <ShopHeader numItems={5} total={210}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/cart" component={CartPage}/>
      </Switch>
    </main>
  );
};

export default App;