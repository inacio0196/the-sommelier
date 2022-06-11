import React from 'react'
import dayjs from 'dayjs'

import { Space } from 'renderer/components'
import { NoteCard, NoteContent, CreatedDate } from './styles'
import theme from 'renderer/theme'

interface INoteProps {
  title: string
}

const Note: React.FC<INoteProps> = ({ title }) => {
  const getStickyNoteStyle = (): { background: string, fontcolor: string } => {
    const colors = theme.sticky_notes_colors
    const randomColorIndex = Math.floor(Math.random() * colors.length)

    return colors[randomColorIndex]
  }

  const NOTE_STYLE = getStickyNoteStyle()

  return (
    <NoteCard
      noteBackgroundColor={NOTE_STYLE.background}
    // width={getStickyNoteWidth()}
    >
      <NoteContent color={NOTE_STYLE.fontcolor}>{title}</NoteContent>
      <Space vertical size={10} />
      <CreatedDate color={NOTE_STYLE.fontcolor}>{dayjs().format('ddd DD MMMM')}</CreatedDate>
    </NoteCard>
  )
}

export default Note
