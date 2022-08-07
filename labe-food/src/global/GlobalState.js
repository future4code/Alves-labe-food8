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
  const [currentRestaurant, setCurrentRestaurant] = useState('')
  const [activeOrder, setActiveOrder] = useState()
  const [preLoadedProfileValues, setPreloadedProfileValues] = useState({})
  const [preLoadedAddressValues, setPreloadedAddressValues] = useState({})


  const getProfile = () => {
    const token = localStorage.getItem('token')
    let newPreLoadedValues = {}
    axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: token
        }
      })
      .then(response => {
        console.log(response.data)
        setProfile(response.data.user)
        newPreLoadedValues = {
          name: response.data.user.name,
          email: response.data.user.email,
          cpf: response.data.user.cpf
        }
        setPreloadedProfileValues(newPreLoadedValues)
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  const getAddress = () => {
    const token = localStorage.getItem('token')
    let newPreLoadedValues = {}
    axios
      .get(`${BASE_URL}/profile/address`, {
        headers: {
          auth: token
        }
      })
      .then(response => {
        setAddress(response.data.address)
        newPreLoadedValues = {
          street: response.data.address.street,
          number: response.data.address.number,
          neighbourhood: response.data.address.neighbourhood,
          city: response.data.address.city,
          state: response.data.address.state,
          complement: response.data.address.complement,
        }
        setPreloadedAddressValues(newPreLoadedValues)
      })
      .catch(err => {
        console.log(err.response)
      })
  }


  const getActiveOrder = () => {
    axios
      .get(`${BASE_URL}/active-order`, {
        headers: {
          auth: localStorage.getItem('token')
        }
      })
      .then(res => {
        setActiveOrder(res.data.order)
      })
      .catch(err => {
        console.log(err.response.message)
      })
  }

  const states = {
    restaurantDetails,
    productsCart,
    profile,
    address,
    quantity,
    currentRestaurant,
    activeOrder,
    preLoadedProfileValues,
    preLoadedAddressValues
  }
  const setters = {
    setRestaurantsDetails,
    setProductsCart,
    setProfile,
    setAddress,
    setQuantity,
    setCurrentRestaurant
  }
  const requests = { getProfile, getAddress, getActiveOrder }

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}
export default GlobalState
