import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  display: flex;
  align-items: center;
  padding: 5px 10px;
`

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const NotificationContainer = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserContainer = styled.div`
`

export const SearchInput = styled.input`
  font-size: 1.3rem;
  width: 100%;
  height: 40px;
  padding: 5px;
`
