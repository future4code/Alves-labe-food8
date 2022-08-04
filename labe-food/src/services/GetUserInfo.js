import React, { useContext , useEffect} from "react";
import { BASE_URL, HEADERS } from "../constants/BASE_URL";
import axios from "axios";
import GlobalStateContext from "../global/GlobalStateContext";


export const GetProfile = () => {
  const{states, setters} = useContext(GlobalStateContext)

  useEffect(()=>{
    axios
    .get(`${BASE_URL}/profile`, {
      headers: HEADERS
    })
    .then ((response) => {
      setters.setProfile(response.data.user)
    })
    .catch ((err) => {
      console.log(err.response)
    })
  },[])
}

export const GetAddress = () => { 
  const{states, setters} = useContext(GlobalStateContext)

  useEffect(()=>{
    axios
    .get(`${BASE_URL}/profile/address`, {
      headers: HEADERS
    })
    .then ((response) => {
      setters.setAddress(response.data.address)
    })
    .catch ((err) => {
       console.log(err.response)
    })
  },[])
}