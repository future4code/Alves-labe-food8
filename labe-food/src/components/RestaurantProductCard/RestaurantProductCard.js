import React, { useContext, useState } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import { Logo } from './Styled'
import Modal from '../Modal/Modal'

export default function RestaurantProductCard(props) {
  const [addButton, setAddButton] = useState(0)

  const [quantity, setQuantity] = useState(0)
  const { states, setters } = useContext(GlobalStateContext)
  const handleQuantity2 = quantity => {}
  const handleQuantity = (product) => {
    setAddButton(addButton + 1)
    const productsInCart = states.productsCart && states.productsCart.filter((item) => {
      if (item.id === product.id) {
        return item
      } else {
        return false
      }
    })
    if (productsInCart.length === 0) {
      setQuantity(1)
      setters.setProductsCart([...states.productsCart, props])
    } else {
      states.productsCart.map((item) => {
        if (product.id === item.id) {
          setQuantity(quantity + 1)
          return item
        } else {
          return item
        }
      })
    }
  }
  
  const remove = (product) => {
    if (quantity === 1) {
    const removeProduct = states.productsCart && states.productsCart.filter((item) => {
      if (product.id !== item.id){
        return item
      }else{
        return false
      }
    }) 
    setters.setProductsCart(removeProduct)
    }else{
      states.productsCart.map((item)=>{
      if(product.id === item.id&&quantity >=1){
        setQuantity(quantity - 1)
        return item
      }else{
        return item
      }
    })
    }
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

      //<h1>R${props.price}</h1>
      //<button onClick={() => handleQuantity(props)}>Adicionar</button>
      //{addButton}
      //<button onClick={()=>remove(props)}>Remover</button>

    </div>
  )
}
