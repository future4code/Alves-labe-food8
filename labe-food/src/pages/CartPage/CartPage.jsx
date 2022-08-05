import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { BASE_URL } from "../../constants/BASE_URL"
import GlobalStateContext from "../../global/GlobalStateContext"
import RestaurantProductCard from "../../components/RestaurantProductCard/RestaurantProductCard"
import Footer from "../../components/Footer/Footer"

const AddressStyled = styled.div`
    background-color: #B8B8B8;
    min-height: 100%;
    p{
    color: #000000 25%;
    }
`
const CartPage = () => {
    const { states } = useContext(GlobalStateContext)

console.log(states.currentRestaurant.id)
    const finalizeOrder = () => {
        const body = {
            products: idAndQuantity,
            paymentMethod: "creditcard"
        }
        axios
            .post(`${BASE_URL}/restaurants/${states.currentRestaurant.id}/order`, body, {
                headers: {
                    auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9lZDRzVUNMcXJDSGV3ZlVzQ2pYIiwibmFtZSI6IkdpbGVhZCBSYWFiIiwiZW1haWwiOiJnaWxlYWRyYWFiQGdtYWlsLmNvbSIsImNwZiI6IjEyMzQ1Njc4OTEwIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSBUZXN0ZSwgMTgwIC0gQmFpcnJvIFRlc3RlIiwiaWF0IjoxNjU5NjQ4MDgxfQ.uHGlgcs1a471lNDVO-ROLFU8ZbyhM7zI7rAVYFRvr5M"
                }
            }).then((resp) => {
                alert("Seu pedido foi envidado com sucesso")
            }).catch((err) => {
                alert(err.message)
            })
    }

    const idAndQuantity = states.productsCart && states.productsCart.map((item) => {
        return { id: item.id, quantity: 2 }
    })
    const initialValue = 0
    const subTotal = states.productsCart && states.productsCart.map((product) => {
        return +product.price * 2
    }).reduce((previousValue, currentValue) => previousValue + currentValue,
        initialValue
    )

    const Products = states.productsCart && states.productsCart.map((product) => {
        return <RestaurantProductCard
            key={product.id}
            id={product.id}
            photoUrl={product.photoUrl}
            name={product.name}
            description={product.description}
            price={product.price}
            
        />
    })
    console.log(states.address)
    return (
        <div>
            <AddressStyled>
                <p>Endereço de entrega</p>
                <p>endereço</p>
            </AddressStyled>
            <div>
                <p>nome do restaurante:{states.currentRestaurant.name}</p>
                <p>endereço do restaurante:{states.currentRestaurant.address}</p>
                <p>tempo de entrega:{states.currentRestaurant.deliveryTime}</p>

                {states.productsCart[0] === undefined ? "O carrinho esta vazio" : Products}
            </div>
            <div>
                <p>frete :{states.currentRestaurant.shipping?states.currentRestaurant.shipping:0}</p>
                <p> subtotal : {subTotal}</p>
            </div>
            <div>
                <p>forma de pagamento</p>
                <button onClick={finalizeOrder}> confirmar</button>
            </div>
            <Footer />

        </div>
    )
}
export default CartPage