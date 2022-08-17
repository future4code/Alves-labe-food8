import React from 'react'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import axios from 'axios'
import { goToFeed } from '../../routes/Coordinator'
import { Div1 } from './style'

const NewAddressForm = () => {
  const { form, onChange, clearFields } = useForm({
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: ''
  })

  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  
  const setAddress = (event) => {
    event.preventDefault()

    let body = form
    axios
    .put(`${BASE_URL}/address`, body, {
      headers: {
        auth: token
      }
    })
    .then ((response) => {
      console.log(body)
      localStorage.setItem('token', response.data.token)
      goToFeed(navigate)
    })
    .catch ((err) => {
      console.log(err.response)
    })
    clearFields()
  }

  return (
    <Div1>
      <form onSubmit={setAddress}>
      <fieldset>
          <legend>Logradouro*</legend>

          <input
            name="street"
            placeholder="Rua / Av."
            value={form.street}
            onChange={onChange}
            required
          />
      </fieldset>
       

      <fieldset>
          <legend>Número*</legend>

          <input
            name="number"
            placeholder="Número"
            value={form.number}
            onChange={onChange}
            required
          />
      </fieldset>

      <fieldset>
          <legend>Complemento</legend>

          <input
            name="complement"
            placeholder="Apto / Bloco"
            value={form.complement}
            onChange={onChange}
          />
      </fieldset>
      

      <fieldset>
          <legend>Bairro*</legend>

          <input
            name="neighbourhood"
            placeholder="Bairro"
            value={form.neighbourhood}
            onChange={onChange}
            required
          />
      </fieldset>
     

      <fieldset>
          <legend>Cidade*</legend>

          <input
            name="city"
            placeholder="Cidade"
            value={form.city}
            onChange={onChange}
            required
          />
      </fieldset>
      

      <fieldset>
          <legend>Estado*</legend>

          <input
            name="state"
            placeholder="Estado"
            value={form.state}
            onChange={onChange}
            required
          />
      </fieldset>
      

      
    
          <button>Salvar</button>
      
      </form>
    </Div1>
  )
}

export default NewAddressForm
