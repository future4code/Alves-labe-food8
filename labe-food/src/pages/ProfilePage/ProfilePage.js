import React, { useEffect, useState } from 'react'
import { Div1, Div2, Div3, Div4, DivOrderCard } from './Styled'
import Edit from '../../assets/edit.png'
import { goToEditAdress, goToEditProfile } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import axios from 'axios'
import Header from '../../components/Header/Header'

const ProfilePage = () => {
  const navigate = useNavigate()

  const [orderHistory, setOrderHistoy] = useState([])

  useEffect(() => {
    getOrderHistory()
  }, [])

  const getOrderHistory = () => {
    axios
      .get(`${BASE_URL}/orders/history`, {
        headers: HEADERS
      })
      .then(res => {
        if (res.data.orders !== null) {
          setOrderHistoy(res.data.orders)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const orderHistoryList = orderHistory.map(order => {
    return (
      <DivOrderCard>
        {/* FALTA SABER COMO OS OBJETOS VEM PARA DEFINIR AS PROPRIEDADES */}
        {/* <h4>{order.name}</h4>
        <p>{order.date}</p>
        <h3>{order.price}</h3> */}
      </DivOrderCard>
    )
  })

  console.log(orderHistory)

  return (
    <Div1>
      <Header title={'Meu Perfil'} />
      <h1>Meu perfil</h1>
      <Div2>
        <p>Nome do usuário</p>
        <p>E-mail do usuário</p>
        <p>CPF do usuário</p>
        <img src={Edit} onClick={() => goToEditProfile(navigate)} />
      </Div2>
      <Div3>
        <h3>Endereço cadastrado</h3>
        <p>Endereço do usuário</p>
        <img src={Edit} onClick={() => goToEditAdress(navigate)} />
      </Div3>
      <Div4>
        <p>Histórico de pedidos</p>
        <hr />
        {orderHistory[0] === undefined ? (
          <p>Não há pedidos</p>
        ) : (
          orderHistoryList
        )}
      </Div4>
      <Footer />
    </Div1>
  )
}

export default ProfilePage
