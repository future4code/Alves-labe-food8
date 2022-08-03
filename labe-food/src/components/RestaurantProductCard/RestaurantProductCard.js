import React, { useState } from 'react'
import { Logo } from './Styled'

export default function RestaurantProductCard(props) {
  const [addButton, setAddButton] = useState(0)
  const handleQuantity = () => {
    setAddButton(addButton + 1)
  }
  return (
    <div key={props.id}>
      <Logo src={props.photoUrl} alt="Foto do produto" />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <h1>R${props.price}</h1>
      <button onClick={() => handleQuantity()}>Adicionar</button>
      {addButton}
      <button onClick={() => setAddButton(0)}>Remover</button>
    </div>
  )
}
