import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useUnprotectedPage} from '../../Hooks/useUnprotectedPage'
import { goToSignUp } from '../../routes/Coordinator'
import LoginForm from '../../components/Login/LoginForm'
import Logo from '../../assets/logo-preto-1.png'
import { Div1 } from './styled'

const LoginPage = () => {
  useUnprotectedPage()
  const navigate = useNavigate()
  useUnprotectedPage()

  return (
    <Div1>
      <img src={Logo} alt='Logo da FutureEats'/>
      <LoginForm/> 
      <p>Não possui cadastro? <span onClick={() => goToSignUp(navigate)}>Clique aqui</span></p>  
    </Div1>
    
  )
}

export default LoginPage
