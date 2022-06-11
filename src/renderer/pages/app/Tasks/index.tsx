import React from 'react'

import { Container } from './styles'
import Filters from './Filters'
import TaskList from './TaskList'

const Tasks: React.FC = () => {
  return (
    <Container>
      <Filters />
      <TaskList />
    </Container>
  )
}

export default Tasks
