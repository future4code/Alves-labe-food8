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
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { goToAdressForm } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'

const FeedPage = () => {
  const [restaurants, setRestaurants] = useState([])
  const [filterNameValue, setFilterNameValue] = useState('')
  const [filterCategoryValue, setFilterCategoryValue] = useState('Todos')
  const {states, setters, requests} = useContext(GlobalStateContext)

  useProtectedPage()

  const navigate = useNavigate()
  
  const handleFilterName = event => {
    setFilterNameValue(event.target.value)
  }

  const token = localStorage.getItem('token')

  useEffect(() => {
    getRestaurants()
    requests.getActiveOrder()
  }, [token])
  
    const getRestaurants = () => {
        axios.get(`${BASE_URL}/restaurants`, {
            headers: HEADERS
        })
            .then((res) => {
                setRestaurants(res.data.restaurants)
            }).catch((err) => {
                console.log(err.response)
                alert(err.response.data.message)
                if (err.response.data.message == "Usuário não possui endereço cadastrado") {
                  goToAdressForm(navigate)
                }
            })
    }

    const restaurantsList = restaurants
        .filter((restaurant) => {
            return (filterCategoryValue === "Todos" ? restaurant : (restaurant.category === filterCategoryValue))
        })
        .filter((restaurant) => {
            return (restaurant.name.toLowerCase().includes(filterNameValue.toLowerCase()))
        })
        .map((restaurant) => {
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
    <div>
      FutureEatsC
      <Filter
        changeName={handleFilterName}
        filterName={filterNameValue}
        changeCategory={setFilterCategoryValue}
        filterCategory={filterCategoryValue}
      />
      {states.activeOrder !== (null && undefined) ? <OrderInProgess /> : ""}

      {restaurantsList}
    </div>
  )
}
export default FeedPage
