import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import Filter from '../../components/Filter/Filter'
import OrderInProgess from '../../components/OrderInProgress/OrderInProgress'
import GlobalStateContext from '../../global/GlobalStateContext'
import Header from '../../components/Header/Header'
import { Div1 } from './Styled'
import Footer from '../../components/Footer/Footer'

const FeedPage = () => {
  const [restaurants, setRestaurants] = useState([])
  const [filterNameValue, setFilterNameValue] = useState('')
  const [filterCategoryValue, setFilterCategoryValue] = useState('Todos')
  const { states, setters, requests } = useContext(GlobalStateContext)

  const handleFilterName = event => {
    setFilterNameValue(event.target.value)
  }

  useEffect(() => {
    getRestaurants()
    requests.getActiveOrder()
  }, [])

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: HEADERS
      })
      .then(res => {
        setRestaurants(res.data.restaurants)
      })
      .catch(err => {
        alert(err.response.data.message)
      })
  }

  const restaurantsList = restaurants
    .filter(restaurant => {
      return filterCategoryValue === 'Todos'
        ? restaurant
        : restaurant.category === filterCategoryValue
    })
    .filter(restaurant => {
      return restaurant.name
        .toLowerCase()
        .includes(filterNameValue.toLowerCase())
    })
    .map(restaurant => {
      return (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          category={restaurant.category}
          address={restaurant.address}
          description={restaurant.description}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          logoUrl={restaurant.logoUrl}
          id={restaurant.id}
        />
      )
    })

  return (
    <Div1>
      <Header title={'FutureEats-C'} />
      <Filter
        changeName={handleFilterName}
        filterName={filterNameValue}
        changeCategory={setFilterCategoryValue}
        filterCategory={filterCategoryValue}
      />
      {states.activeOrder !== (null && undefined) ? <OrderInProgess /> : ''}

      {restaurantsList}
      <Footer />
    </Div1>
  )
}
export default FeedPage
