import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllProducts from "../Components/AllProducts";
import Cart from "../Components/Cart";
import Favourites from "../Components/Favourites";
import Navbaar from "../Components/NavBar";
export default function RouterMain() {
  return (
    <Router>
      <Navbaar />
      <Switch>
        <Route exact path="/">
          <AllProducts />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/favourite">
          <Favourites />
        </Route>
      </Switch>
    </Router>
  );
}
