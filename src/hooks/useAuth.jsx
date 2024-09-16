import { useEffect, useState } from 'react'
import { useAxios } from '../hooks/useAxios'

export const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState('')
  
  useEffect(() => {
    if (code) {
      useAxios()
        .post('/login', { code })
        .then((res) => {
          setAccessToken(res.data.accessToken)
        })
        .catch((err) => {
          window.location = '/'
        })
    }
  }, [])
  return accessToken
}


