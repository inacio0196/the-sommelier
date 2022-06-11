import React, { useState } from 'react'
import ReactCalendar from 'react-calendar';

import { Container } from './styles'
import './Calendar.css';

const Calendar: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <Container>
      <ReactCalendar
        onChange={setDate}
        value={date}
      />
    </Container>
  )
}

export default Calendar
