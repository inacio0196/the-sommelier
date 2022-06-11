import styled from 'styled-components'

interface INoteCardProps {
  noteBackgroundColor: string
}

export const NoteCard = styled.div<INoteCardProps>`
  font-size: 0.5rem;
  box-shadow: 3px 3px 8px #000;
  -webkit-box-shadow: 3px 3px 8px #818181;
  -moz-box-shadow: 3px 3px 8px #818181;
  max-width: 300px;
  background-color: ${props => props.noteBackgroundColor};
  padding: 10px;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`

interface INoteContentProps {
  color: string
}

export const NoteContent = styled.span<INoteContentProps>`
  color: ${props => props.color};
  font-family: Dreamy Notes;
  font-size: 1.2rem;
`

interface ICreatedDateProps {
  color: string
}

export const CreatedDate = styled.span<ICreatedDateProps>`
  font-size: 1rem;
  font-family: San Francisco Bold;
  color: ${props => props.color}
`

