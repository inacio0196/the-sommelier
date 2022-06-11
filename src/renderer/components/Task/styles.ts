import styled from "styled-components";

interface ITaskCardProps {
  priorityColor: string
}

export const TaskCard = styled.div<ITaskCardProps>`
  box-shadow: 3px 3px 8px #000;
  -webkit-box-shadow: 3px 3px 8px #818181;
  -moz-box-shadow: 3px 3px 8px #818181;

  padding: 10px;
  min-height: 60px;
  border-left-width: 5px;
  border-style: solid;
  border-color: ${props => props.priorityColor};
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.02)
  }
`

export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
`

export const TaskTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  font-family: San Francisco Bold;
  color: #4C4C4C;
`
