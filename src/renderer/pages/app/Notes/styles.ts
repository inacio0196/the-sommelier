import styled from 'styled-components'

export const NotesLayout = styled.div`
  display: grid;

  grid-template-columns: 30% 70%;
  grid-template-rows: 100vh;

  grid-template-areas:
    'noteslist noteedit';
`
