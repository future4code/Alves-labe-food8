import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import GlobalStateContext from '../global/GlobalStateContext'

const useRequestData = (initialData, url, headers) => {
  const [data, setData] = useState(initialData)
  const { states, setters } = useContext(GlobalStateContext)

  useEffect(() => {
    axios
      .get(url, {
        headers
      })
      .then(response => {
        setData(response.data)
        setters.setRestaurantsDetails(response.data)
      })
      .catch(error => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url])

  return data
}

export default useRequestData
