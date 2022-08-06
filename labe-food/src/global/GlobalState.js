import React from 'react'
import GlobalStateContext from './GlobalStateContext'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, HEADERS } from '../constants/BASE_URL'

const GlobalState = props => {
  const [restaurantDetails, setRestaurantsDetails] = useState([])
  const [productsCart, setProductsCart] = useState([])
  const [profile, setProfile] = useState({})
  const [address, setAddress] = useState({})
  const [quantity, setQuantity] = useState([])
  const [currentRestaurant, setCurrentRestaurant]=useState("")
  const [activeOrder, setActiveOrder] = useState()

  const getActiveOrder = () => {
    axios.get(`${BASE_URL}/active-order`, {
      headers: HEADERS
    })
    .then((res) => {
      setActiveOrder(res.data.order)
    })
    .catch((err) => {
      console.log(err.response.message)
    })
  }

  const states = { restaurantDetails, productsCart, profile, address,quantity,currentRestaurant, activeOrder}
  const setters = { setRestaurantsDetails, setProductsCart, setProfile, setAddress,setQuantity,setCurrentRestaurant }
  const requests = {getActiveOrder}

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}
export default GlobalState
 