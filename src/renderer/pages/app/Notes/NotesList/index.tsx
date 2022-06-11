import React from "react";
import { AiOutlinePlusCircle, AiOutlineSearch } from 'react-icons/ai'
import { TbSortDescendingLetters/*, TbSortAscendingLetters*/ } from 'react-icons/tb'

import { Space } from 'renderer/components'
import {
  NotesListContainer,
  HeaderContainer,
  SearchInputContainer,
  SearchInput
} from './styles'

const NotesList: React.FC = () => {
  return (
    <NotesListContainer>
      <HeaderContainer>
        <button>
          <TbSortDescendingLetters color='white' size={25} />
          {/* <TbSortAscendingLetters size={25} /> */}
        </button>
        <h1 style={{ color: 'white' }}>Notas</h1>
        <button>
          <AiOutlinePlusCircle color='white' size={25} />
        </button>
      </HeaderContainer>
      <Space vertical size={5} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <SearchInputContainer>
          <AiOutlineSearch size={20} />
          <Space horizontal size={10} />
          <SearchInput placeholder="Pesquisar" />
        </SearchInputContainer>
      </div>
      <Space vertical size={20} />
    </NotesListContainer>
  )
}

export default NotesList
