import React, { useState } from 'react'
import {BASE_URL} from '../../constants/BASE_URL'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import axios from 'axios'
import { goToAdressForm } from '../../routes/Coordinator'
import { Div1 } from './styled'
import Logo from '../../assets/logo-preto-1.png'

const SignUpForm = () => {
  const {form, onChange, clearFields} = useForm({name:"", email:"", cpf:"", password:"", confirmPassword:""})

  const navigate = useNavigate()
  
  const signUp = (event) => {
    event.preventDefault()

    let body = form
    if (body.confirmPassword != body.password){
      alert("As senhas digitadas não coincidem. Verifique se o valor fornecido no campo 'Senha' corresponde ao valor no campo 'Confirmar' ")
    } else {
      delete body.confirmPassword

      axios
      .post(`${BASE_URL}/signup`, body)
      .then ((response) => {
        localStorage.setItem('token', response.data.token)
        goToAdressForm(navigate)
      })
      .catch ((err) => {
        alert(err.response.data.message)
      })
      clearFields()
    }
  }

  return (
    <Div1>
      <img src={Logo}/>
      <form onSubmit={signUp}>
        <fieldset>
          <legend>Nome*</legend>
          <input
            name="name"
            placeholder="Nome e sobrenome"
            value={form.name}
            onChange={onChange}
            required
            />
        </fieldset>

        <fieldset>
          <legend>E-mail*</legend>

          <input 
            name="email"
            placeholder="email@email.com"
            type="Email"
            value={form.email}
            onChange={onChange}
            required
            />
        </fieldset>
        
        
        <fieldset>
          <legend>CPF*</legend>
          
          <input 
            name="cpf"
            placeholder="000.000.000-00"
            pattern="[0-9]{11}" title="CPF incorreto"
            value={form.cpf}
            onChange={onChange}
            required
            />
        </fieldset>
        

        <fieldset>
          <legend>Senha*</legend>
          
          <input
            name="password"
            placeholder="Mínimo 6 caracteres"
            type="password"
            value={form.password}
            onChange={onChange}
            pattern=".{6,30}" title="Senha deve possuir no mínimo 6 e no máximo 30 caracteres"
            required
          />
        </fieldset>
        

        <fieldset>
          <legend>Confirmar*</legend>
          
          <input
            name="confirmPassword"
            placeholder="Confirme a senha"
            type="password"
            value={form.confirmPassword}
            onChange={onChange}
            pattern=".{6,30}" title="Senha deve possuir no mínimo 6 e no máximo 30 caracteres"
            required
          />  
        </fieldset>
        
        <button>Criar</button>
      </form>
    </Div1>
  )
}

export default SignUpForm