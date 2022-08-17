import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToRestaurant } from '../../routes/Coordinator'
import { RestaurantCardStyle } from './Styled'

const RestaurantCard = props => {
  const navigate = useNavigate()

  return (
    <RestaurantCardStyle onClick={() => goToRestaurant(navigate, props.id)}>
      <div>
        <img src={props.logoUrl} />
      </div>
      <h2>{props.name}</h2>
      <section>
        <h4>
          Entrega: {props.deliveryTime - 10} - {props.deliveryTime} min
        </h4>
        <h4>Frete R${props.shipping.toFixed(2)}</h4>
      </section>
    </RestaurantCardStyle>
  )
}

export default RestaurantCard
