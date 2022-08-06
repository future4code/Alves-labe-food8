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
  const [quantity, setQuantity] = useState(0)
  const [currentRestaurant, setCurrentRestaurant]=useState("")
  const [activeOrder, setActiveOrder] = useState()
  const [preLoadedValues, setPreloadedValues] = useState({})


  const getProfile = () => {
      let newPreLoadedValues = {}
      axios
      .get(`${BASE_URL}/profile`, {
        headers: HEADERS
      })
      .then ((response) => {
        setProfile(response.data.user)
        newPreLoadedValues = {
          name: response.data.user.name,
          email: response.data.user.email,
          cpf: response.data.user.cpf
        }
        setPreloadedValues(newPreLoadedValues)
      })
      .catch ((err) => {
        console.log(err.response)
      })
  }
  
  const getAddress = () => {
      axios
      .get(`${BASE_URL}/profile/address`, {
        headers: HEADERS
      })
      .then ((response) => {
        setAddress(response.data.address)
      })
      .catch ((err) => {
         console.log(err.response)
      })
  }

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

  const states = { restaurantDetails, productsCart, profile, address,quantity,currentRestaurant, activeOrder, preLoadedValues}
  const setters = { setRestaurantsDetails, setProductsCart, setProfile, setAddress,setQuantity,setCurrentRestaurant }
  const requests = {getProfile, getAddress, getActiveOrder}

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}
export default GlobalState
 