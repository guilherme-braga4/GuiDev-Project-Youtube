import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../Pages/Login/index.js'
import Pricing from '../Pages/Home/index.js'
import AuthProvider from '../Contexts/AuthContext'

const PrivateRoutes = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
  )
}

export default PrivateRoutes
