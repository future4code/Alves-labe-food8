import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useUnprotectedPage} from '../../Hooks/useUnprotectedPage'
import { goToSignUp } from '../../routes/Coordinator'
import LoginForm from '../../components/Login/LoginForm'

const LoginPage = () => {
  const navigate = useNavigate()
  useUnprotectedPage()

  return (
    <div>
      <LoginForm/> 
      <hr/>
      <p>Não possui cadastro?<span onClick={() => goToSignUp(navigate)}>Clique aqui</span></p>  
    </div>
    
  )
}

export default LoginPage
