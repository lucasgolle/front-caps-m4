import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px)
    }
    to{
        opacity: 1;
        transform: translateX(0px)
    }
`;
export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 0 auto;
  width: 320px;
  animation: ${appearFromLeft} 1s;

  section {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    column-count: 2;

    section {
      width: 140px;
    }
  }

  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
    font-size: 2rem;
    font-family: var(--title-1);
  }

  p {
    color: var(--title);
    margin-top: 1rem;
    a {
      text-decoration: none;
      color: var(--primary-color-1);
      font-weight: bold;
      &:hover {
        color: var(--title);
      }
    }
  }

  label {
    font-family: var(--paragraph);
    font-weight: 400;
  }
`;

export const BackgroundDesktop = styled.div`
  display: none;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    display: flex;
    width: 50vw;
    height: 100vh;
    background-color: var(--primary-color);
  }
`;

export const InputCEP = styled.input`
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
  outline: none;
  width: 100%;
  font-size: 1rem;
  color: var(--title);
  max-width: max-content;
  -webkit-appearance: none;
  height: 3.5rem;

  text {
    width: 100%;
  }

  &::placeholder {
    color: #8d99ae;
    font-size: 0.8rem;
  }

 
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SpanCEP = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    margin-left: 5px;
    font-size: 1rem;
    font-weight: 700;
  }
`;
