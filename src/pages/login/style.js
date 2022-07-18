import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
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

  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 60px;
    margin-top: 46px;
    font-size: 2rem;
    font-family: "Itim";
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

