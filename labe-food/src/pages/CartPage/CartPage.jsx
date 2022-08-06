import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { BASE_URL } from "../../constants/BASE_URL"
import GlobalStateContext from "../../global/GlobalStateContext"
import RestaurantProductCard from "../../components/RestaurantProductCard/RestaurantProductCard"
import Cart from "../../components/Cart/Cart"

const CartPage = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const [pay, setPay] = useState("")

    useEffect(() => {
        if (states.productsCart.length < 1) {
            return setters.setCurrentRestaurant("")
        }
    }, [states.productsCart])


    const finalizeOrder = () => {
        const body = {
            products: idAndQuantity,
            paymentMethod: pay
        }
        axios
            .post(`${BASE_URL}/restaurants/${states.currentRestaurant.id}/order`, body, {
                headers: {
                    auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9lZDRzVUNMcXJDSGV3ZlVzQ2pYIiwibmFtZSI6IkdpbGVhZCBSYWFiIiwiZW1haWwiOiJnaWxlYWRyYWFiQGdtYWlsLmNvbSIsImNwZiI6IjEyMzQ1Njc4OTEwIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSBUZXN0ZSwgMTgwIC0gQmFpcnJvIFRlc3RlIiwiaWF0IjoxNjU5NjQ4MDgxfQ.uHGlgcs1a471lNDVO-ROLFU8ZbyhM7zI7rAVYFRvr5M"
                }
            }).then((resp) => {
                alert("Seu pedido foi envidado com sucesso")
                setters.setQuantity([])
                setters.setProductsCart([])
            }).catch((err) => {
                alert(err.response.data.message)
            })
    }

    const handlePay = (e) => {
        setPay(e.target.value)
    }
    const idAndQuantity = states.quantity && states.quantity.map((item) => {
        return { id: item.id, quantity: Number(item.quantity) }
    })

    const initialValue = 0
    const subTotal = states.quantity && states.quantity.map((product) => {
        return product.price * product.quantity
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
            price={product.price} />
    })


    return <Cart
        Products={Products}
        subTotal={subTotal}
        idAndQuantity={idAndQuantity}
        handlePay={handlePay}
        finalizeOrder={finalizeOrder}

    />

}
export default CartPage