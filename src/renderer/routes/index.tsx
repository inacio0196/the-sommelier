import React from 'react'

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';


const Routes: React.FC = () => {
  const authenticated = true

  return authenticated ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
