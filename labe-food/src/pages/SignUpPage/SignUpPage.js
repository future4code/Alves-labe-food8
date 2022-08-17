import React from 'react'
import SignUpForm from '../../components/SignUp/SignUpForm'
import Header from '../../components/Header/Header'
import {useUnprotectedPage} from '../../Hooks/useUnprotectedPage'

const SignUpPage = () => {

  useUnprotectedPage()

  return (
    <div>
      <Header title={'Cadastrar'} />      
      <SignUpForm />
    </div>
  )
}

export default SignUpPage
