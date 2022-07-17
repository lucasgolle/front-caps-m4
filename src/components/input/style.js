import styled from "styled-components";

export const Container = styled.section `
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    span {
      color: #D90429;
      width: 20px;
      width: 8rem;
    }
  }
`

export const InputStyled = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 3.5rem;
  background: #ffffff;
  border: 1px solid var(--primary-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 2rem;
  padding-left: 0.6rem;

  input {
    background: transparent;
    position: absolute;
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
    color: var(--title);
    max-width: max-content;

    &::placeholder {
      color: #8d99ae;
      font-size: 0.8rem;
    }
  }
`;

export const Label = styled.label`
  color: var(--title);
  margin-left: 0.3rem;
  margin-right: 0.3rem;
`;
