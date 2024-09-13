import { useState } from 'react'
import { useAxios } from './useAxios'

export const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState('')
    useAxios().post("/login", {code}).then(res => {
        console.log(res)
    })
  return accessToken
}
