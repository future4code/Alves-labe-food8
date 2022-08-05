import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import Filter from '../../components/Filter/Filter'
import { Div1 } from './Styled'
import Footer from '../../components/Footer/Footer'

const FeedPage = () => {
    const [restaurants, setRestaurants] = useState([])
    const [filterNameValue, setFilterNameValue] = useState("")
    const [filterCategoryValue, setFilterCategoryValue] = useState("Todos")

    const handleFilterName = (event) => {
        setFilterNameValue(event.target.value)
    }

    useEffect(() => {
        getRestaurants()
    }, [])

    const getRestaurants = () => {
        axios.get(`${BASE_URL}/restaurants`, {
            headers: HEADERS
        })
            .then((res) => {
                setRestaurants(res.data.restaurants)
            }).catch((err) => {
                alert(err.response.data.message)
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

    console.log(localStorage.getItem('token'))

    return (
        <Div1>
            FutureEatsC
            <Filter
                changeName={handleFilterName}
                filterName={filterNameValue}
                changeCategory={setFilterCategoryValue}
                filterCategory={filterCategoryValue}
            />
            {restaurantsList}
            <Footer />
        </Div1>
    )
}
export default FeedPage

// .filter((restaurant) => {
//     return (filterCategoryValue === "" ? restaurant : (restaurant.category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === filterCategoryValue) )
// })