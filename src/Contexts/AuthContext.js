import React, { createContext, useState } from 'react'
import App from '../App'

//Context (Consumed) - Function
export const AuthContext = createContext({})

//Provider Function - Component
function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false)
  console.log('auth', auth)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
