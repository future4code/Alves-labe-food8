import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { BASE_URL } from "../../constants/BASE_URL"
import GlobalStateContext from "../../global/GlobalStateContext"
import {ProductCard} from "../../components/ProductCard/ProductCard" 

const AddressStyled=styled.div`
    background-color: #B8B8B8;
    min-height: 100%;
    p{
    color: #000000 25%;
    }
`
const CardPage = () => {
  const {states}=useContext(GlobalStateContext)
  const[arrayvazio,setarrayVazio]=useState(states.productsCart)

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

const Products = states.productsCart&&states.productsCart.map((item)=>{
     return <ProductCard key={item.id} product={item}/>
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


        </div>
    )
}
export default CardPage