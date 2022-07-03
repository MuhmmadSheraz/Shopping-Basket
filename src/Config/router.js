import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../Views/Home'
import AllProducts from '../Components/AllProducts'
import Cart from '../Components/Cart'
import Favourites from '../Components/Favourites'
import Navbaar from '../Components/NavBar'
export default function RouterMain() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Navbaar />
          <AllProducts />
        </Route>
        <Route path="/cart">
          <Navbaar />
          <Cart />
        </Route>
        <Route path="/favourite">
          <Navbaar />
          <Favourites />
        </Route>
      </Switch>
    </Router>
  )
}
