import React from 'react'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import axios from 'axios'
import { goToFeed } from '../../routes/Coordinator'

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
  
  const setAddress = (event) => {
    event.preventDefault()

    let body = form
    axios
    .put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
    .then ((response) => {
      console.log(body)
      localStorage.setItem('token', response.data.token)
      goToFeed(navigate)
    })
    .catch ((err) => {
      console.log(body)
      console.log(err.response)
    })
    clearFields()
  }

  return (
    <div>
      <form onSubmit={setAddress}>
        <p>
          <input
            name="street"
            placeholder="Logradouro"
            value={form.street}
            onChange={onChange}
            required
          />
        </p>

        <p>
          <input
            name="number"
            placeholder="Número"
            value={form.number}
            onChange={onChange}
            required
          />
        </p>

        <p>
          <input
            name="neighbourhood"
            placeholder="Bairro"
            value={form.neighbourhood}
            onChange={onChange}
            required
          />
        </p>

        <p>
          <input
            name="city"
            placeholder="Cidade"
            value={form.city}
            onChange={onChange}
            required
          />
        </p>

        <p>
          <input
            name="state"
            placeholder="Estado"
            value={form.state}
            onChange={onChange}
            required
          />
        </p>

        <p>
          <input
            name="complement"
            placeholder="Complemento"
            value={form.complement}
            onChange={onChange}
          />
        </p>

        <p>
          <button>Salvar</button>
        </p>
      </form>
    </div>
  )
}

export default NewAddressForm
