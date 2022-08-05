import React, { useContext, useState } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import { Logo } from './Styled'
import Modal from '../Modal/Modal'

export default function RestaurantProductCard(props) {
  const [addButton, setAddButton] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const { states, setters } = useContext(GlobalStateContext)


 
  const handleQuantityCart = (product) => {
 if(states.currentRestaurant===""){
  setters.setCurrentRestaurant(product.currentRestaurant)
  setters.setProductsCart([...states.productsCart, props])
}
  if(product.currentRestaurant.id!==states.currentRestaurant.id){
    setters.setProductsCart([product])
    setters.setCurrentRestaurant(product.currentRestaurant)
    setters.setQuantity(1)

    }else{
    const productsInCart = states.productsCart && states.productsCart.filter((item) => {
      if (item.id === product.id) {
        return item
      } else {
        return false
      }
    })
    if (productsInCart.length === 0) {
      setters.setQuantity(+1)
      setters.setProductsCart([...states.productsCart, props])
    } else {
      setters.setQuantity(states.quantity+1)
      states.productsCart.map((item) => {
        if (product.id === item.id) {
          setters.setQuantity(states.quantity + 1)
          return item
        } else {
          return item
        }
      })
    }
  }
}
console.log(states.quantity)
console.log(states.productsCart)
  
  const remove = (product) => {
    if (states.quantity === 1) {
    const removeProduct = states.productsCart && states.productsCart.filter((item) => {
      setters.setQuantity(0)
      if (product.id !== item.id){
        return item
      }else{
        return false
      }
    }) 
    setters.setProductsCart(removeProduct)
    }else{
      states.productsCart.map((item)=>{
      if(product.id === item.id&&states.quantity >=1){
        setters.setQuantity(states.quantity - 1)
        return item
      }else{
        return item
      }
    })
    }
  }

  const handleQuantity = quantity => {
    setAddButton(addButton + 1)
  }


  const eraseProduct = (props) => {
    setAddButton(0)
    remove(props)
  }
  
  return (
    <div key={props.id}>
      <Logo src={props.photoUrl} alt="Foto do produto" />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <h1>R${props.price}</h1>
      <button onClick={() => handleQuantityCart(props)}>Adicionar</button>
      {quantity}
      <button onClick={() => remove(props)}>Remover</button>
      <Modal
        handleQuantity={handleQuantity}
        setAddButton={setAddButton}
        addButton={addButton}
      />


    </div>
  )
}
