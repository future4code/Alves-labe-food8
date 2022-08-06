import { useContext, useEffect, useState } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import Footer from "../../components/Footer/Footer"


const Cart = ({Products,subTotal,finalizeOrder,handlePay}) => {
    const { states } = useContext(GlobalStateContext)

return (
    <div>
        <div>
            <p>Endereço de entrega</p>
            <p>endereço</p>
        </div>
        <div>
            {states.productsCart[0] === undefined ? "O carrinho esta vazio" : <div>
                <p>nome do restaurante:{states.currentRestaurant.name}</p>
                <p>endereço do restaurante:{states.currentRestaurant.address}</p>
                <p>tempo de entrega:{states.currentRestaurant.deliveryTime}</p>
                {Products}
            </div>}
        </div>
        <div>
            <p>frete :{states.currentRestaurant.shipping ? states.currentRestaurant.shipping : 0}</p>
            <p> subtotal : {subTotal ? subTotal + states.currentRestaurant.shipping : 0}</p>
        </div>
        <div>
            <p>forma de pagamento</p>
            <select onChange={handlePay} >
                <option value={""}>selecione o pagamento</option>
                <option value={"creditcard"}>credito</option>
                <option value={"money"}>dinheiro</option>
            </select>
            <button onClick={finalizeOrder}> confirmar</button>
        </div>
        <Footer />

    </div>
)
}
export default Cart