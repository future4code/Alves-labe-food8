import React, { useContext, useEffect } from 'react'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import { useParams } from 'react-router-dom'
import {
  Container,
  RestaurantImage,
  Title,
  Text,
  TextContainer
} from './Styled'
import GlobalStateContext from '../../global/GlobalStateContext'
import RestaurantProductCard from '../../components/RestaurantProductCard/RestaurantProductCard'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const RestaurantPage = () => {
  const { states, setters } = useContext(GlobalStateContext)
  const params = useParams()
  const details = useRequestData(
    [],
    `${BASE_URL}/restaurants/${params.id}`,
    {
      auth: localStorage.getItem('token')
    }
  )
  useEffect(() => {
    setDetailsToGlobalState()
  }, [details])

  const setDetailsToGlobalState = () => {
    setters.setRestaurantsDetails(details?.restaurant)
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
        currentRestaurant={details.restaurant}
      />
    )
  })

  return (
    <>
      <Header title={'Restaurante'} />
      <Container>
        <RestaurantImage
          src={details.restaurant?.logoUrl}
          alt="Logo da empresa"
        />
        <Title>{details.restaurant?.name}</Title>
        <Text>{details.restaurant?.category}</Text>
        <TextContainer>
          <Text>
            {details.restaurant?.deliveryTime - 10}-
            {details.restaurant?.deliveryTime} min{' '}
          </Text>
          <Text>
            Frete: R$
            {details.restaurant?.shipping}
            ,00
          </Text>
        </TextContainer>
        <Text>{details.restaurant?.address}</Text>
        <hr />
        {products}
        <Footer />
      </Container>
    </>
  )
}

export default RestaurantPage
