import React, { useState, useEffect } from 'react'
import { removeFromFav } from '../../Reducers/favouriteReducer'
import { useDispatch, useSelector } from 'react-redux'
import { cardType3, stateType } from '../Types/type'
const Favourites = () => {
  const [data, setData] = useState<cardType3[]>([])
  const dispatch = useDispatch()
  let favValue = useSelector((state: stateType) => {
    return state.favSlice.favArray
  })
  useEffect(() => {
    setData(favValue)
  }, [favValue])
  if (data.length == 0)
    return (
      <h1 className="d-flex justify-content-center align-item-center h-100 mt-2">
        No Favourites Added
      </h1>
    )
  return (
    <div className="container mt-5">
      <div className="row ">
        {data &&
          data.map((item: cardType3, index: number) => {
            return (
              <div key={index} className="col-md-4 mt-1">
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: {item.price}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeFromFav(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Favourites
