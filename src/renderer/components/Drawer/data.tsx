import { useId } from '../../hooks'
import { IoNotificationsOutline, IoBusinessOutline  } from 'react-icons/io5'
import { MdOutlineDashboard } from 'react-icons/md'
import { FaTasks } from 'react-icons/fa'
import { MdOutlineStickyNote2 } from 'react-icons/md'
import { TbNotes } from 'react-icons/tb'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

export default [
  {
    id: useId(),
    name: 'Notificações',
    route: '/notifications',
    icon: <IoNotificationsOutline size={20} />,
    badge: 12, 
  },
  {
    id: useId(),
    name: 'Dashboard',
    route: '/',
    icon: <MdOutlineDashboard size={20} />,
    badge: 0, 
  },
  {
    id: useId(),
    name: 'Tarefas',
    route: '/tasks',
    icon: <FaTasks size={20} />,
    badge: 2, 
  },
  {
    id: useId(),
    name: 'Empresa',
    route: '/company',
    icon: <IoBusinessOutline size={20} />,
    badge: 0, 
  },
  {
    id: useId(),
    name: 'Lembretes',
    route: '/sticky-notes',
    icon: <MdOutlineStickyNote2 size={20} />,
    badge: 4, 
  },
  {
    id: useId(),
    name: 'Anotações',
    route: '/notes',
    icon: <TbNotes size={20} />,
    badge: 1, 
  },
  {
    id: useId(),
    name: 'Finanças',
    route: '/finance',
    icon: <RiMoneyDollarCircleLine size={20} />,
    badge: 0, 
  },
]
