
import React from 'react'

import GlobalStateContext from './GlobalStateContext'
import { useState } from 'react'

const GlobalState = props => {
  const [restaurantDetails, setRestaurantsDetails] = useState([])
  const [productsCart, setProductsCart] = useState([])
  const states = { restaurantDetails, productsCart }
  const setters = { setRestaurantsDetails, setProductsCart }




  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
    //Fica aqui diabo
  )
}
export default GlobalState