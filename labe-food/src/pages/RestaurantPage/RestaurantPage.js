import React, { useContext, useState } from 'react'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Logo, Title, Text } from './Styled'
import GlobalStateContext from '../../global/GlobalStateContext'
import { goToCart } from '../../routes/Coordinator'

const RestaurantPage = () => {
  const navigate=useNavigate()
  const {setters,states}=useContext(GlobalStateContext)
  const [addButton, setAddButton] = useState(0)
  const params = useParams()
  const details = useRequestData(
    [],
    `${BASE_URL}/restaurants/${params.id}`,
    HEADERS
  )
  const products = details.restaurant?.products.map(product => {
    return (
      <div key={product.id}>
        <Logo src={product.photoUrl} alt="Foto do produto" />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h1>R${product.price}</h1>
        <button onClick={()=>addProduct(product)} >Ternário</button>
      </div>
    )
  })
  const addProduct=(product)=>{
    setters.setProductsCart([...states.productsCart,product])
  }
  

  return (
    <Container>
      <Logo src={details.restaurant?.logoUrl} alt="Logo da empresa" />
      <Title>{details.restaurant?.name}</Title>
      <Text>{details.restaurant?.category}</Text>
      <Text>
        {details.restaurant?.deliveryTime} min Frete: R$
        {details.restaurant?.shipping}
        ,00
      </Text>
      <Text>{details.restaurant?.address}</Text>
      <hr />
      {products}
      <button onClick={()=>goToCart(navigate)}>cart</button>
    </Container>
  )
}

export default RestaurantPage
