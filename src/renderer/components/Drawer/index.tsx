import React from "react";
import { useNavigate, useLocation } from 'react-router-dom'

import { Space } from '../../components'
import { Container, DrawerItemButton, DrawerItemButtonTitle } from './styles'

import data from './data'

const Drawer: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Container>
      <h2>Drawer</h2>
      <Space vertical size={10} />
      {data.map(menuItem => (
        <>
          <DrawerItemButton
            onClick={() => navigate(menuItem.route)} key={menuItem.id}
            isActive={menuItem.route === pathname}
          >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              {menuItem.icon}
              <Space horizontal size={10} />
              <DrawerItemButtonTitle>{menuItem.name}</DrawerItemButtonTitle>
            </div>
            {menuItem.badge > 0 && (
              <span>{menuItem.badge}</span>
            )}
          </DrawerItemButton>
          <Space vertical size={5} />
        </>
      ))}
    </Container>
  )
}

export default Drawer
