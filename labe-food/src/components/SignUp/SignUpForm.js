import React, { useState } from 'react'
import {BASE_URL} from '../../constants/BASE_URL'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import {useUnprotectedPage} from '../../Hooks/useUnprotectedPage'
import axios from 'axios'
import { goToAdressForm } from '../../routes/Coordinator'

const SignUpForm = () => {
  const {form, onChange, clearFields} = useForm({name:"", email:"", cpf:"", password:"", confirmPassword:""})
  console.log(form)

  const navigate = useNavigate()
  
  const signUp = (event) => {
    event.preventDefault()

    let body = form
    if (body.confirmPassword != body.password){
      alert("passwords does not match")
    } else {
      delete body.confirmPassword

      axios
      .post(`${BASE_URL}/signup`, body)
      .then ((response) => {
        localStorage.setItem('token', response.data.token)
        console.log(response.data)
        goToAdressForm(navigate)
      })
      .catch ((err) => {
        alert(err.response.data.message)
      })
      clearFields()
    }
  }

  return (
    <div>
      <form onSubmit={signUp}>
        <p>
          <input
            name="name"
            placeholder="Nome"
            value={form.name}
            onChange={onChange}
            required
            />
        </p>

        <p>
          <input 
            name="email"
            placeholder="email"
            type="Email"
            value={form.email}
            onChange={onChange}
            required
            />
        </p>
        
        <p>
          <input 
            name="cpf"
            placeholder="CPF(apenas números)"
            pattern="[0-9]{11}" title="CPF incorreto"
            value={form.cpf}
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
            pattern=".{6,30}" title="Senha deve possuir no mínimo 6 e no máximo 30 caracteres"
            required
          />
        </p>

        <p>
          <input
            name="confirmPassword"
            placeholder="Confirmar senha"
            type="password"
            value={form.confirmPassword}
            onChange={onChange}
            pattern=".{6,30}" title="Senha deve possuir no mínimo 6 e no máximo 30 caracteres"
            required
          />  
        </p>
        <p><button>Criar</button></p>
      </form>
    </div>
  )
}

export default SignUpForm