import React from 'react'
import GlobalStateContext from './GlobalStateContext'
import { useState } from 'react'

const GlobalState = props => {
  const [restaurantDetails, setRestaurantsDetails] = useState([])
  const states = { restaurantDetails }
  const setters = { setRestaurantsDetails }

  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
    //Fica aqui diabo
  )
}
export default GlobalState
