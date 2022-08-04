import React from 'react'
import GlobalStateContext from './GlobalStateContext'
import { useState } from 'react'

const GlobalState = props => {
  const [restaurantDetails, setRestaurantsDetails] = useState([])
  const [productsCart, setProductsCart] = useState([])
  const [profile, setProfile] = useState({})
  const [address, setAddress] = useState({})
  const [quantity, setQuantity] = useState(0)
  const states = { restaurantDetails, productsCart, profile, address }
  const setters = { setRestaurantsDetails, setProductsCart, setProfile, setAddress }

  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}
export default GlobalState
 