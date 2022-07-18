import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  /* background-image: ; */
  background-color: var(--secondary-color);
`;

export const InputSearch = styled.input`
  display: flex;
  width: 238px;
  height: 36px;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  padding-left: 20px;

  @media (min-width: 1024px) {
    position: absolute;
    top: 124px;
    /* left: 580px; */
    margin: auto;
    width: 321px;
    height: 36px;
    background-color: var(--primary-color);
  }
`;

export const DivShowcase = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    position: absolute;
    top: 201px;
    /* left: 580px; */
    margin: auto;
    width: 1154px;
    height: 599px;
    background-color: rgba(237, 242, 244, 0.5);
    border: 1px solid #2b2d42;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;

export const ListShowcase = styled.ul`
  list-style: none;
  padding: 19px 47px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 197px;
  width: 237px;
  height: 392px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin-top: 19px;
    padding: 19px 38px;
  }
`;
