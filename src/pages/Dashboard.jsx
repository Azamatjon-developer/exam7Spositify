import React from 'react'
import { useAuth } from '../hooks/useAuth' 

function Dashboard({code}) {
    const accessToken = useAuth(code)
  return (
    <div>
      <h2>Dashboard </h2>
    </div>
  )
}

export default Dashboard
