import React, { useContext, useEffect } from 'react'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import axios from 'axios'
import { goToProfile } from '../../routes/Coordinator'
import GlobalStateContext from '../../global/GlobalStateContext'
import {Div1} from './style'

const UpdateProfile = () => {
  const { states, setters, requests } = useContext(GlobalStateContext)
  const { form, onChange, clearFields } = useForm(states?.preLoadedProfileValues)
  
  const navigate = useNavigate()
  useProtectedPage()

  useEffect(() => {
    requests.getProfile()
  }, [])

  const token = localStorage.getItem('token')

  const updateProfile = event => {
    event.preventDefault()

    let body = form
    axios
    .put(`${BASE_URL}/profile`, body, {
      headers: {
        auth: token
      }
    })
    .then ((response) => {
      alert("Perfil atualizado com sucesso!")
      goToProfile(navigate)
    })
    .catch ((err) => {
       console.log(err.response)
    })
    clearFields()
  }

  return (
    <Div1>
      <form onSubmit={updateProfile}>
        <fieldset>
          <legend>Nome</legend>

          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={onChange}
            required
          />
        </fieldset>
       

        <fieldset>
          <legend>E-mail</legend>
          
          <input
            name="email"
            placeholder="E-mail"
            type="Email"
            value={form.email}
            onChange={onChange}
            required
          />
        </fieldset>
       

        <fieldset>
          <legend>CPF</legend>
          
          <input
            name="cpf"
            placeholder="CPF(apenas números)"
            pattern="[0-9]{11}"
            title="CPF incorreto"
            value={form.cpf}
            onChange={onChange}
            required
          />
        </fieldset>
       

        
          <button>Salvar</button>
       
      </form>
    </Div1>
  )
}

export default UpdateProfile
