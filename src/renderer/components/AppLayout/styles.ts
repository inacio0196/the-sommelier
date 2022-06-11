import styled from "styled-components";

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 15vw auto auto;
  grid-template-rows: 6vh 100vh 100vh;
  grid-template-areas: 
    'drawer content content'
    'drawer content content';

  height: 100vh;
`
