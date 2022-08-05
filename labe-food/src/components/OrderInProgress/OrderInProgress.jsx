import React, { useEffect } from 'react'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'

const OrderInProgress = () => {
    const { states, setters, requests } = useContext(GlobalStateContext)
    
    useEffect(() => {
        requests.getActiveOrder()
    }, [])

    return ( 
        <div>
            <h2>Pedido em andamento</h2>
            <h3>{states.activeOrder?.restaurantName}</h3>
            <h3>SUBTOTAL R${states.activeOrder?.totalPrice.toFixed(2)}</h3>
        </div>
    )
}

export default OrderInProgress