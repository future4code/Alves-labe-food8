import React, { useContext } from 'react'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Logo, Title, Text } from './Styled'
import GlobalStateContext from '../../global/GlobalStateContext'
import RestaurantProductCard from '../../components/RestaurantProductCard/RestaurantProductCard'

const RestaurantPage = () => {
  const { states, setters } = useContext(GlobalStateContext)
  const params = useParams()
  const details = useRequestData(
    [],
    `${BASE_URL}/restaurants/${params.id}`,
    HEADERS
  )

  const addProduct = product => {
    setters.setProductsCart([...states.productsCart, product])
  }
  const products = details.restaurant?.products.map(product => {
    return (
      <RestaurantProductCard
        key={product.id}
        id={product.id}
        photoUrl={product.photoUrl}
        name={product.name}
        description={product.description}
        price={product.price}
        addProduct={addProduct}
      />
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
