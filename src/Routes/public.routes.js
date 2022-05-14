import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../Pages/Login/index.js'
import Pricing from '../Pages/Home/index.js'

const PublicRoutes = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default PublicRoutes
