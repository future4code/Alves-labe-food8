import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url, headers) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios
      .get(url, {
        headers
      })
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }, [url])

  return data
}

export default useRequestData
