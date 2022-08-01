import React from 'react'
import styled from 'styled-components'

const RestaurantCard = (props) => {
  return (
    <RestaurantCardStyle>
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