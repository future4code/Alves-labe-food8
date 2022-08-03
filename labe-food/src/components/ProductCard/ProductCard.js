import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Logo } from '../../pages/RestaurantPage/Styled'
import { goToRestaurant } from '../../routes/Coordinator'

export const ProductCard = ({product}) => {

  return (
    <div key={product.id}>
    <Logo src={product.photoUrl} alt="Foto do produto" />
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    <h1>R${product.price}</h1>
    <button onClick={"()=>addProduct(product)"} >remover</button>
  </div>
  )
}