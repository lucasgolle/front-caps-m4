import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 100vh;
  padding: 5rem 1.143rem 0;
  align-items: stretch;
  position: absolute;
  z-index: 15;
  color: black;
  display: flex;
  justify-content: space-between;
  background-color: var(--background);
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  span {
    width: 100px;
  }
  svg {
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    color: black;
    font-size: 1.5rem;
  }
  button {
    margin: 5px;
  }
`;