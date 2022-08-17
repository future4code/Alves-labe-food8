import { useContext, useEffect, useState } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import {AddressStyled,LabelTextStyled,TextStyled,Container, NameRestaurant, Text, CartText, PaymentContainer, Button, Cards} from './Styled'



const Cart = ({Products,subTotal,finalizeOrder,handlePay}) => {
    const { states } = useContext(GlobalStateContext)

return (
    <Container>
        <Header title={"Meu carrinho"}/>
        <AddressStyled>
            <LabelTextStyled>Endereço de entrega:</LabelTextStyled>
            <TextStyled>{states.currentRestaurant.address?states.currentRestaurant.address:"Não há pedidos no carrinho"}</TextStyled>
        </AddressStyled>
        <div>
            
            {states.productsCart[0] === undefined ?<CartText> O carrinho esta vazio</CartText> : 
            
            <Cards>
                <NameRestaurant>{states.currentRestaurant.name}</NameRestaurant>
                <p>{states.currentRestaurant.address}</p>
                <p>Tempo de entrega: {states.currentRestaurant.deliveryTime} min</p>
                {Products}
            </Cards>}
        </div>
        <div>
            <Text> Frete: {states.currentRestaurant.shipping ? states.currentRestaurant.shipping : 0}</Text>
            <Text> Subtotal : {subTotal ? subTotal + states.currentRestaurant.shipping : 0}</Text>
        </div>
        <PaymentContainer>
            <select onChange={handlePay} >
                <option value={""}>Selecione o pagamento</option>
                <option value={"creditcard"}>Cartão de crédito</option>
                <option value={"money"}>Dinheiro</option>
            </select>
            <hr/>
            <Button onClick={finalizeOrder}> CONFIRMAR</Button>
        </PaymentContainer>
        <Footer />

    </Container>
)
}
export default Cart