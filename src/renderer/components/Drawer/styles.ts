import styled from "styled-components";

export const Container = styled.div`
  grid-area: drawer;

  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 0;
`

interface IDrawerItemButtonProps {
  isActive: boolean
}

const getDrawerItemStatus = (props: IDrawerItemButtonProps): string => {
  if (props.isActive) {
    return `
      background-color: #383838;
      color: white;
    `
  }

  return 'background-color: white;'
}

export const DrawerItemButton = styled.button<IDrawerItemButtonProps>`
  ${getDrawerItemStatus}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: all ease-in 0.1s;
  cursor: pointer;
  opacity: 0.9;
  padding: 5px 10px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;

  &:hover {
    transform: scale(1.05);
  }
`

export const DrawerItemButtonTitle = styled.span`
  font-size: 0.9rem; 
`
