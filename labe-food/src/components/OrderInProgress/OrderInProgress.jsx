import React, { useEffect } from 'react'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import { OrderCard, WhiteTitle, BlackTitle, TotalPrice, Clock } from './Styled'
import clock from '../../assets/clock.png'

const OrderInProgress = () => {
    const { states, setters, requests } = useContext(GlobalStateContext)
    
    useEffect(() => {
        requests.getActiveOrder()
    }, [])

    return ( 
        <OrderCard>
            <Clock src={clock} />
            <WhiteTitle>Pedido em andamento</WhiteTitle>
            <BlackTitle>{states.activeOrder?.restaurantName}</BlackTitle>
            <TotalPrice>SUBTOTAL R${states.activeOrder?.totalPrice.toFixed(2)}</TotalPrice>
        </OrderCard>
    )
}

export default OrderInProgress