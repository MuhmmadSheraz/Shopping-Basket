import React from 'react'
import { useHistory } from 'react-router-dom'
import imagebg from '../../assets/shoppingBg.jpg'
import './home.css'
const Home = () => {
  const history = useHistory()
  const handleNavigate = () => {
    history.push('/products')
  }
  return (
    <div className="home-wrapper">
      <img className="home-bg" src={imagebg} />
      <div className="content">
        <h1 className="heading">Shopping Basket</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id debitis
          perferendis numquam officia necessitatibus ipsum obcaecati eos maiores
        </p>
        <button className="btn btn-success mt-3 " onClick={handleNavigate}>
          Start Shopping
        </button>
      </div>
    </div>
  )
}

export default Home
