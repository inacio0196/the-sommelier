import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  display: grid;

  grid-template-columns: 30% auto;
  grid-template-rows: 100vh;

  grid-template-areas:
    'filters tasklist';
`
