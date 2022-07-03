import { Link } from 'react-router-dom'
import './navbar.css'

import { useSelector } from 'react-redux'
const Navbaar = () => {
  const value = useSelector((state: any) => {
    return state.cartSlice.cartArray.length
  })
  return (
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-warning position-fixed full-zindex w-100 ">
        <a className="navbar-brand " href="/">
          Shopping Basket
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="#navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <span className="nav-item nav-link  ">
              <Link to="/">Home</Link>
            </span>
            <span className="nav-item nav-link ">
              <Link to="/cart">
                Cart
                <span className=" ml-1 mr-2 badge badge-pill badge-dark">
                  {value || 0}
                </span>
              </Link>
            </span>
            <span className="nav-item nav-link ">
              <Link to="/favourite">Favourites</Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbaar
