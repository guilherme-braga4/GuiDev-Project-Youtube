import React, {useContext} from 'react'
import PublicRoutes from './Routes/public.routes'
import PrivateRoutes from './Routes/private.routes'
import { AuthContext } from './Contexts/AuthContext'

function App() {
  const { auth } = useContext(AuthContext)
  console.log("auth", auth)
  return auth ? <PrivateRoutes /> : <PublicRoutes />
}

export default App;
