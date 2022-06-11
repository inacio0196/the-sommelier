import React from 'react'
import { MemoryRouter as Router, Routes as RoutesList, Route } from 'react-router-dom';

import Login from 'renderer/pages/auth/Login';

const AuthRoutes: React.FC = () => {
  return (
    <Router>
      <RoutesList>
        <Route path="/" element={<Login />} />
      </RoutesList>
    </Router>
  )
}

export default AuthRoutes 
