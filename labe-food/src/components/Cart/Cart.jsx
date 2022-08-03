import { useContext } from "react"
import { HEADERS } from "../../constants/BASE_URL"
import GlobalStateContext from "../../global/GlobalStateContext"

const CardPage = () => {
    const {states} = useContext(GlobalStateContext)
    console.log(states.productsCart)

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
            headers:HEADERS
                
        }).then((resp)=>{

        }).catch((err)=>{console.log(err)})
    }

    
    return ( "")
}