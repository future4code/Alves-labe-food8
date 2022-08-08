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
        setters.setProductsCart([...states.productsCart, props])
      }
    }
  }
console.log(states.quantity)
  const remove = product => {
    const removeProduct =
      states.productsCart &&
      states.productsCart.filter(item => {
        if (product.id !== item.id) {
          return item
        } else {
          return false
        }
      })
    setters.setProductsCart(removeProduct)
    const removeQuantity =
      states.quantity &&
      states.quantity.filter(item => {
        if (product.id !== item.id) {
          return item
        } else {
          return false
        }
      })
    setters.setQuantity(removeQuantity)

    if (states.productsCart.length < 1) {
      return setters.setCurrentRestaurant('')
    }
  }

  const quantityTrue = states.quantity
    .filter(item => {
      if (item.id === props.id) {
        return item
      }
    })
    .map(item => {
      return Number(item.quantity)
    })
  return (
    <ContainerCard key={props.id}>
      <ProductImage src={props.photoUrl} alt="Foto do produto" />
      <ContainerText>
        <Title>{props.name}</Title>
        <QuantityNumber>{quantityTrue ? quantityTrue[0] : ''}</QuantityNumber>
        <DescriptionText>{props.description}</DescriptionText>
        <Price>R${props.price.toFixed(2)}</Price>

        <ContainerButton>
          {quantityTrue[0] > 0 ? (
            <RemoveButton onClick={() => remove(props)}>Remover</RemoveButton>
          ) : (
            <Modal
              handleQuantityCart={handleQuantityCart}
              setQuantity={setQuantity}
              quantity={quantity}
              product={props}
            />
          )}
        </ContainerButton>
      </ContainerText>
    </ContainerCard>
  )
}
