import styled from "styled-components";
import { motion } from "framer-motion";
import productsBackground from "../../assets/bannerSolid2.png";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  overflow-y: auto;
  background-image: url(${productsBackground});
  background-repeat: no-repeat;
  background-size: cover;

  svg {
    color: #000000;
    z-index: 1;
    top: 15%;
    position: fixed;
    margin-left: 110px;
    margin-top: 8px;
  }
`;

export const InputSearch = styled.input`
  background: #ffffff;
  border: 2px solid #101010;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  color: var(--title);
  width: 300px;
  padding-left: 1rem;
  height: 2.7rem;
  margin-bottom: 4rem;
  top: 15%;
  position: fixed;

  &::placeholder {
    color: #8d99ae;
    font-size: 1rem;
  }
`;

export const DivShowcase = styled.div`
  z-index: 2;
  display: flex;
  overflow-x: scroll;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100vw;
  background-color: #fff5f5;
  border: 1px solid #2b2d42;
  padding-top: 150px;
  border-radius: 10px;
  border-bottom: none;
  overflow-y: hidden;
  @media (min-width: 1024px) {
    display: block;
    width: 80%;
    margin-top: 18rem;
    overflow-x: hidden;
    min-height: 100vh;
  }
`;

export const ListShowcase = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  height: 392px;
  @media (min-width: 1024px) {
    flex-wrap: wrap;
    padding-bottom: 100px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 55px;
  width: 260px;
  height: 392px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: 1s;

  img {
    width: 100%;
    height: 150px;
  }

  h2 {
    font-size: 1.5rem;
    font-family: var(--title-2);
    margin-top: 20px;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    font-family: var(--title-2);
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
  }

  span {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #8d99ae;
    margin-right: 145px;
  }

  &:hover {
    width: 280px;
    transition: 1s;
    box-shadow: 14px 14px 20px #111111;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: -15px;
  }

  @media (min-width: 1024px) {
  }
`;
