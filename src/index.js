import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PublicRoutes from './Routes/public.routes'
import AuthProvider, { AuthContext } from './Contexts/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
