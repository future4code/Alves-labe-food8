import React, { useContext, useEffect } from 'react'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import axios from 'axios'
import { goToProfile } from '../../routes/Coordinator'
import GlobalStateContext from '../../global/GlobalStateContext'
import Footer from '../Footer/Footer'

const UpdateAddressForm = () => {
  const{states, setters, requests} = useContext(GlobalStateContext)
  const { form, onChange, clearFields } = useForm(states?.preLoadedValues)

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
        headers: HEADERS
      })
      .then(response => {
        alert('Endereço atualizado')
        goToProfile(navigate)
      })
      .catch(err => {
        alert(err.response)
      })
    clearFields()
  }

  return (
    <div>
      <form onSubmit={updateAdress}>
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
            pattern=".{6,30}"
            title="Senha deve possuir no mínimo 6 e no máximo 30 caracteres"
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
      <Footer/>
    </div>
  )
}

export default UpdateAddressForm
