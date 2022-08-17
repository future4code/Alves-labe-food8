import React, { useContext, useEffect } from 'react'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import axios from 'axios'
import { goToProfile } from '../../routes/Coordinator'
import GlobalStateContext from '../../global/GlobalStateContext'
import {Div1} from './style'

const UpdateAddressForm = () => {
  const{states, setters, requests} = useContext(GlobalStateContext)
  const { form, onChange, clearFields } = useForm(states?.preLoadedAddressValues)

  const navigate = useNavigate()
  useProtectedPage()

  useEffect(() => {
    requests.getAddress()
  },[form])

  const updateAdress = event => {
    event.preventDefault()

    let body = form
    axios
      .put(`${BASE_URL}/address`, body, {
        headers: {
          auth: localStorage.getItem('token')
        }
      })
      .then((response) => {
        alert('Endereço atualizado')
        goToProfile(navigate)
      })
      .catch((err) => {
        alert(err.response)
      })
    clearFields()
  }

  return (
    <Div1>
      <form onSubmit={updateAdress}>
        <fieldset>
          <legend>Logradouro</legend>

          <input
            name="street"
            placeholder="Logradouro"
            value={form.street}
            onChange={onChange}
            required
          />
        </fieldset>
        

        <fieldset>
          <legend>Número</legend>
          
          <input
            name="number"
            placeholder="Número"
            value={form.number}
            onChange={onChange}
            required
          />
        </fieldset>
        

        <fieldset>
          <legend>Bairro</legend>
          
          <input
            name="neighbourhood"
            placeholder="Bairro"
            value={form.neighbourhood}
            onChange={onChange}
            required
          />
        </fieldset>
        

        <fieldset>
          <legend>Cidade</legend>
          
          <input
            name="city"
            placeholder="Cidade"
            value={form.city}
            onChange={onChange}
            pattern=".{6,30}"
            title="Senha deve possuir no mínimo 6 e no máximo 30 caracteres"
            required
          />
        </fieldset>
        

        <fieldset>
          <legend>Estado</legend>
          
          <input
            name="state"
            placeholder="Estado"
            value={form.state}
            onChange={onChange}
            required
          />
        </fieldset>
        

        <fieldset>
          <legend>Complemento</legend>
          
          <input
            name="complement"
            placeholder="Complemento"
            value={form.complement}
            onChange={onChange}
          />
        </fieldset>
        

        
          <button>Salvar</button>
        
      </form>
    </Div1>
  )
}

export default UpdateAddressForm
