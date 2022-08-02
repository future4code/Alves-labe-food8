import React, { useContext, useState } from 'react'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import { useParams } from 'react-router-dom'
import { Container, Logo, Title, Text } from './Styled'

const RestaurantPage = () => {
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
        <button>Ternário</button>
      </div>
    )
  })

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
    </Container>
  )
}

export default RestaurantPage
