import styled from "styled-components";

interface ISpaceProps {
  vertical?: boolean
  horizontal?: boolean
  size: number
}

const setSpace = (props: ISpaceProps): string => {
  if (props.horizontal) {
    return `width: ${props.size}px`
  }

  return `height: ${props.size}px`
}

export default styled.div`
  ${setSpace}
`
