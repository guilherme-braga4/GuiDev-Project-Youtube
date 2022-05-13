import React, { useContext, useState } from 'react'
import AuthProvider, { AuthContext } from './Contexts/AuthContext'
import PublicRoutes from './Routes/public.routes'
import PrivateRoutes from './Routes/private.routes'

function App() {
  const { auth } = useContext(AuthContext)
  console.log('authApp', auth)
  return auth ? <PrivateRoutes /> : <PublicRoutes />
}

export default App
