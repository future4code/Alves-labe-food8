import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { BASE_URL } from "../../constants/BASE_URL"
import GlobalStateContext from "../../global/GlobalStateContext"
import RestaurantProductCard from "../../components/RestaurantProductCard/RestaurantProductCard" 
import Footer from "../../components/Footer/Footer"

const AddressStyled=styled.div`
    background-color: #B8B8B8;
    min-height: 100%;
    p{
    color: #000000 25%;
    }
`
const CartPage = () => {
  const {states}=useContext(GlobalStateContext)
  console.log(states.productsCart[0])



    const finalizeOrder = () =>{
        const body={
                products: [{
                    id: "",
                    quantity: 10
                }, {
                    quantity: 1,
                    id: ""
                }],
                paymentMethod: "creditcard"
            }
        axios
        .post(`${BASE_URL}/restaurants/:restaurantId/order `, body, {
            headers:{
                auth:"token"
            }
        }).then((resp)=>{

        }).catch((err)=>{console.log(err)})
    }

const Products = states.productsCart&&states.productsCart.map((product)=>{
     return <RestaurantProductCard
     key={product.id}
     id={product.id}
     photoUrl={product.photoUrl}
     name={product.name}
     description={product.description}
     price={product.price}
     />
    })


    return (
        <div>
            <AddressStyled>
                <p>Endereço de entrega</p>
                <p>endereço</p>
            </AddressStyled>
            <div>
            <p>restaruante</p>
            
            {states.productsCart[0]===undefined?"O carrinho esta vazio":Products}
            </div>
            <div>
                <p>frete</p>
                <p> subtotal</p>
            </div>
            <div>
                <p>forma de pagamento</p>
                <button> confirmar</button>
            </div>
<Footer/>

        </div>
    )
}
export default CartPage