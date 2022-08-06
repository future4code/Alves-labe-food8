import React, { useContext, useEffect } from 'react'
import { BASE_URL, HEADERS } from '../../constants/BASE_URL'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import axios from 'axios'
import { goToProfile } from '../../routes/Coordinator'
import GlobalStateContext from '../../global/GlobalStateContext'

const UpdateProfile = () => {
  const{states, setters, requests} = useContext(GlobalStateContext)


  const {form, onChange, clearFields} = useForm(states.preLoadedValues)

  useEffect(() => {
    requests.getProfile()
  },[form])
 
  console.log(states.preLoadedValues)

  useProtectedPage()

  const navigate = useNavigate()


  console.log(form)

  const updateProfile = event => {
    event.preventDefault()

    let body = form
    axios
    .put(`${BASE_URL}/profile`, body, {
      headers: HEADERS
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
    <div>
      <form onSubmit={updateProfile}>
        <p>
          <input
            name="name"
            placeholder={states.profile.name}
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
            pattern="[0-9]{11}"
            title="CPF incorreto"
            value={form.cpf}
            onChange={onChange}
            required
          />
        </p>

        <p>
          <button>Salvar</button>
        </p>
      </form>
    </div>
  )
}

export default UpdateProfile
