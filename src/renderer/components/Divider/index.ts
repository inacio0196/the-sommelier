import styled from "styled-components";

interface IDividerProps {
  direction: 'vertical' | 'horizontal'
  size?: string
}

const setDividerStyle = (props: IDividerProps): string => {
  const dividerStyle = {
    vertical: `width: ${props.size ? props.size : '0.2px'}; height: 100%;`,
    horizontal: `width: 100%; height: ${props.size ? props.size : '0.2px'};`,
  }

  return `${dividerStyle[props.direction]} background-color: #767676; margin: 0 3px 0 3px;`
}

const Divider = styled.div<IDividerProps>`
  ${setDividerStyle}
`

export default Divider
