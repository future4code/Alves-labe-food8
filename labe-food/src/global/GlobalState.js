
import React from 'react'
import GlobalStateContext from './GlobalStateContext'
import { useState } from 'react'

const GlobalState = props => {
  const [restaurantDetails, setRestaurantsDetails] = useState([])
  const [productsCart, setProductsCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const states = { restaurantDetails, productsCart,quantity }
  const setters = { setRestaurantsDetails, setProductsCart,setQuantity }

  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
    //Fica aqui diabo
  )
}
export default GlobalState
 