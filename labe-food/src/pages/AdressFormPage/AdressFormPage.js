import React from 'react'
import NewAddressForm from '../../components/Address/NewAddressForm'
import Header from '../../components/Header/Header'

const AdressFormPage = () => {
  return (
    <div>
      <Header title={'Meu Endereço'} />
      <NewAddressForm />
    </div>
  )
}

export default AdressFormPage
