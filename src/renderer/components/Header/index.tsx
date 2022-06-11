import React from "react";

import { IoNotificationsOutline } from 'react-icons/io5'
import { AiOutlineSearch } from 'react-icons/ai'

import { Container, SearchContainer, SearchInput, NotificationContainer, UserContainer } from './styles'
import { Divider, Space } from '../../components'

const Header: React.FC = () => {
  return (
    <Container>
      <SearchContainer>
        <AiOutlineSearch size={25} color="#767676" />
        <SearchInput
          placeholder="Pesquisar..."
        />
      </SearchContainer>
      <Space horizontal size={10} />
      <Divider direction="vertical" />
      <NotificationContainer>
        <IoNotificationsOutline color="#767676" size={25} />
      </NotificationContainer>
      <Divider direction="vertical" />
      <Space horizontal size={10} />
      <UserContainer>
        <h5>Rafael Inácio da Silva D'Oliveira</h5>
      </UserContainer>
    </Container>
  )
}

export default Header
