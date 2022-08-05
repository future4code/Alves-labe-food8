import React, { useContext, useState } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import {
  ProductImage,
  ContainerCard,
  Title,
  ContainerText,
  DescriptionText,
  Price,
  QuantityNumber,
  ContainerButton,
  RemoveButton
} from './Styled'
import Modal from '../Modal/Modal'

export default function RestaurantProductCard(props) {
  const { states, setters } = useContext(GlobalStateContext)
  const [quantity, setQuantity] = useState(0)

  const handleQuantityCart = product => {
    if (states.currentRestaurant === '') {
      setters.setCurrentRestaurant(product.currentRestaurant)
      setters.setProductsCart([...states.productsCart, props])
    }
    if (product.currentRestaurant.id !== states.currentRestaurant.id) {
      setters.setProductsCart([product])
      setters.setCurrentRestaurant(product.currentRestaurant)
      setters.setQuantity(1)
    } else {
      const productsInCart =
        states.productsCart &&
        states.productsCart.filter(item => {
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
        setters.setQuantity(states.quantity + 1)
        states.productsCart.map(item => {
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
  // console.log(states.quantity)
  // console.log(states.productsCart)

  const remove = product => {
    if (states.quantity === 1) {
      const removeProduct =
        states.productsCart &&
        states.productsCart.filter(item => {
          setters.setQuantity(0)
          if (product.id !== item.id) {
            return item
          } else {
            return false
          }
        })
      setters.setProductsCart(removeProduct)
    } else {
      states.productsCart.map(item => {
        if (product.id === item.id && states.quantity >= 1) {
          setters.setQuantity(states.quantity - 1)
          return item
        } else {
          return item
        }
      })
    }
  }

  const handleQuantity = quantity => {
    setQuantity(quantity + 1)
  }
  console.log(states.quantity)
  return (
    <ContainerCard key={props.id}>
      <ProductImage src={props.photoUrl} alt="Foto do produto" />
      <ContainerText>
        <Title>{props.name}</Title>
        <QuantityNumber>{quantity ? quantity : ''}</QuantityNumber>
        <DescriptionText>{props.description}</DescriptionText>
        <Price>R${props.price.toFixed(2)}</Price>
        {/* <button onClick={() => handleQuantityCart(props)}>Adicionar</button> */}

        <ContainerButton>
          {quantity ? (
            <RemoveButton onClick={() => remove(props)}>Remover</RemoveButton>
          ) : (
            <Modal
              handleQuantity={handleQuantity}
              setQuantity={setQuantity}
              quantity={quantity}
            />
          )}
        </ContainerButton>
      </ContainerText>
    </ContainerCard>
  )
}
