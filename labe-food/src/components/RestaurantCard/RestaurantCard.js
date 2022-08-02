import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import { goToRestaurant } from '../../routes/Coordinator'

const RestaurantCard = (props) => {
  const navigate = useNavigate()

  return (
    <RestaurantCardStyle onClick={() => goToRestaurant(navigate, props.id)}>
        <img src={props.logoUrl} />
        <h2>{props.name}</h2>
        <h4>Tempo de entrega: {props.deliveryTime}</h4>
        <h4>Frete: {props.shipping}</h4>
    </RestaurantCardStyle>
  )
}

export default RestaurantCard

const RestaurantCardStyle = styled.div`
  border-style: solid ;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`