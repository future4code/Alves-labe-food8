import React, { useContext } from 'react'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Logo, Title, Text } from './Styled'
import ProductCard from '../../components/ProductCard/ProductCard'
import GlobalStateContext from '../../global/GlobalStateContext'

const RestaurantPage = () => {
  const { setters, states } = useContext(GlobalStateContext)
  const params = useParams()
  const details = useRequestData(
    [],
    `${BASE_URL}/restaurants/${params.id}`,
    HEADERS
  )

  const addProduct = (product) => {
    setters.setProductsCart([...states.productsCart, product])
  }
  const products = details.restaurant?.products.map(product => {
    return (
      <ProductCard
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
    <div>RestaurantPage</div>

  )
}

export default RestaurantPage