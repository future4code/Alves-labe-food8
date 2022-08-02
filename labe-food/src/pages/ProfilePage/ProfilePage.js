import React from 'react'
import { Div1, Div2, Div3, Div4, DivOrderCard } from './Styled'
import Edit from '../../assets/edit.png'
import { goToEditAdress, goToEditProfile } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'


const ProfilePage = () => {

  const navigate = useNavigate()

  return (
    <Div1>
      <h1>Meu perfil</h1>
      <Div2>
        <p>Nome do usuário</p>
        <p>E-mail do usuário</p>
        <p>CPF do usuário</p>
        <img src={Edit} onClick={() => goToEditProfile(navigate)} />
      </Div2>
      <Div3>
        <h3>
          Endereço cadastrado
        </h3>
        <p>Endereço do usuário</p>
        <img src={Edit} onClick={() => goToEditAdress(navigate)} />
      </Div3>
      <Div4>
        <p>Histórico de pedidos</p>
        <hr />
        <DivOrderCard>
          <h4>Nome de um dos pedidos</h4>
          <p>Data de um dos pedidos</p>
          <h3>SUBTOTAL de um dos pedidos</h3>
        </DivOrderCard>
      </Div4>
      <Footer/>
    </Div1>
  )
}

export default ProfilePage