import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  display: grid;

  grid-template-columns: auto 30%;
  grid-template-rows: 100vh;

  grid-template-areas: 
    'stickynotes calendar';
`
