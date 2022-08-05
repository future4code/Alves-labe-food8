import React from 'react'
import GlobalStateContext from './GlobalStateContext'
import { useState } from 'react'

const GlobalState = props => {
  const [restaurantDetails, setRestaurantsDetails] = useState([])
  const [productsCart, setProductsCart] = useState([])
  const [profile, setProfile] = useState({})
  const [address, setAddress] = useState({})
  const [quantity, setQuantity] = useState(0)
  const [currentRestaurant, setCurrentRestaurant]=useState("")
  const states = { restaurantDetails, productsCart, profile, address,quantity,currentRestaurant }
  const setters = { setRestaurantsDetails, setProductsCart, setProfile, setAddress,setQuantity,setCurrentRestaurant }

  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}
export default GlobalState
 