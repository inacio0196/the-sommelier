import React from "react";
import dayjs from 'dayjs'

import {
  Container,
} from './styles'
import { Task, Space } from 'renderer/components'
import { useId } from 'renderer/hooks'

const TaskList: React.FC = () => {
  const tasks = [
    {
      id: useId(),
      title: 'Comprar produtos de limpeza',
      priority: 'A',
      project: ['Casa', 'Limpeza'],
      context: ['Super Mercado'],
      time: null,
      duedate: dayjs().add(2, 'minutes'),
      completionDate: null,
    },
    {
      id: useId(),
      title: 'Crar anotações sobre feature FornecedorId',
      priority: 'B',
      project: ['csn'],
      context: ['trabalho'],
      time: null,
      duedate: dayjs().add(4, 'days'),
      completionDate: null,
    },
    {
      id: useId(),
      title: 'Componente de task criado',
      priority: 'B',
      project: ['sommelier'],
      context: [],
      time: null,
      duedate: dayjs().subtract(3, 'days'),
      completionDate: null,
    },
    {
      id: useId(),
      title: 'Cortar cabelo',
      priority: 'C',
      project: [],
      context: [],
      time: null,
      duedate: null,
      completionDate: null,
    },
    {
      id: useId(),
      title: 'Assistir Hunter x Hunter',
      priority: '',
      project: [],
      context: [],
      time: null,
      duedate: null,
      completionDate: null,
    },
  ]

  return (
    <Container>
      {tasks.map(task => (
        <>
          <Task
            key={task.id}
            title={task.title}
            priority={task.priority}
            project={task.project}
            context={task.context}
            time={task.time}
            duedate={task.duedate}
            completionDate={task.completionDate}
          />
          <Space vertical size={10} />
        </>
      ))}
    </Container>
  )
}

export default TaskList 
