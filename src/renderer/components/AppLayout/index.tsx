import React from "react";
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom'

import { Grid } from './styles'
import { Drawer, Content } from '../../components'

interface IAppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <Grid>
      <Drawer />
      <Content>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          key={pathname}
          className="page-container"
        >
          {children}
        </motion.div>
      </Content>
    </Grid>
  )
}

export default AppLayout
