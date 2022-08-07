import React from 'react'
import {BASE_URL} from '../../constants/BASE_URL'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import axios from 'axios'
import { goToAdressForm, goToFeed } from '../../routes/Coordinator'

const LoginForm = () => {
  const {form, onChange, clearFields} = useForm({email:"", password:"" })


  const navigate = useNavigate()
  
  const login = (event) => {
    event.preventDefault()

    let body = form
    axios
    .post(`${BASE_URL}/login`, body)
    .then ((response) => {
      localStorage.setItem('token', response.data.token)
      response.data.user.hasAddress ? goToFeed(navigate) : goToAdressForm(navigate)
    })
    .catch ((err) => {
       alert(err.response.data.message)
    })
    clearFields()
  }


return (
  <div>
    <form onSubmit={login}>
      <p>
        <input 
          name="email"
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={onChange}
          required
          />
      </p>
      <p>
        <input 
          name="password"
          placeholder="Senha"
          type="password"
          value={form.password}
          onChange={onChange}
          pattern=".{6,30}" title="Senha deve possuir no mínimo 8 e no máximo 30 caracteres"
          required
          />
      </p>
      <p><button>Entrar</button></p>
    </form>
  </div>
  
  )
}

export default LoginForm