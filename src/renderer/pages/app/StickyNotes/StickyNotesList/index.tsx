import React from "react";

import { Container } from './styles'
import { Note } from 'renderer/components'

const StickyNotesList: React.FC = () => {
  return (
    <Container>
      <h1>Lembretes</h1>
      <Note title="Lembrar de criar a tela de nota" />
      <Note title="Lembrar de criar a tela de nota" />
      <Note title="Lembrar de criar a tela de nota" />
      <Note title="Lembrar de criar a tela de nota" />
    </Container>
  )
}

export default StickyNotesList
