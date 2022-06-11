import React from "react";

import { Note } from 'renderer/components'
import { Container } from './styles'

import Calendar from "./Calendar";
import StickyNotesList from "./StickyNotesList";

const StickyNotes: React.FC = () => {

  return (
    <Container>
      <StickyNotesList />
      <Calendar />
    </Container>
  )
}

export default StickyNotes
