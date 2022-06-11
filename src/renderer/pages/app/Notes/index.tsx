import React from "react";

import { NotesLayout } from './styles'

import NotesList from './NotesList'
import NoteEdit from "./NoteEdit";

const Notes: React.FC = () => {
  return (
    <NotesLayout>
      <NotesList />
      <NoteEdit />
    </NotesLayout>
  )
}

export default Notes
