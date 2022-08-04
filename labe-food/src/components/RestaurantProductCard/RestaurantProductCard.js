import React, { useState } from 'react'
import { Logo } from './Styled'
import Modal from '../Modal/Modal'

export default function RestaurantProductCard(props) {
  const [addButton, setAddButton] = useState(0)
  const handleQuantity = quantity => {
    setAddButton(addButton + 1)
    props.addProduct(props)
  }
  const eraseProduct = () => {
    setAddButton(0)
    props.removeProduct()
  }

  return (
    <div key={props.id}>
      <Logo src={props.photoUrl} alt="Foto do produto" />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <h1>R${props.price}0</h1>
      <button onClick={() => handleQuantity()}>Adicionar</button>
      {addButton}
      <button onClick={() => eraseProduct()}>Remover</button>
      <Modal
        handleQuantity={handleQuantity}
        setAddButton={setAddButton}
        addButton={addButton}
      />
    </div>
  )
}
