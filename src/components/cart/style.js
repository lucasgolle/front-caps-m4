import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(500px)
    }
    to{
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const Container = styled.div`
  width: 100vw;
  padding: 5rem 1.143rem 0;
  position: absolute;
  z-index: 15;
  color: black;
  min-height: 100vh;
  display: flex;
  height: 100vh;
  overflow-y: hidden;
  position: fixed;
  max-width: 700px;
  background-color: var(--background);
  flex-direction: column;
  justify-content: space-between;

  div>button {
    margin: 5px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 120px;
    margin-top: 0px;
  }

  span {
    width: 100px;
    z-index: 20;
    color: black;
  }
  svg {
    cursor: pointer;
    position: relative;
    margin-right: 15px;
    margin-top: 28px;
  }
  h2 {
    color: black;
    font-size: 1.7rem;
    margin-left: 15px;
    margin-top: 50px;
    font-family: "Roboto";
  }
  button {
    margin-bottom: 10px;
    position: relative;
  }

  @media (min-width: 1581px) {
    right: 0;
    top: 0;
    width: 25%;
    min-height: 100vh;
    padding-top: 0;
    padding-left: 4rem;
    z-index: 35;
    position: fixed;
    animation: ${appearFromLeft} 1s;

    div {
      justify-content: space-between;
    }
    svg {
      margin-right: 30px;
    }
  }
  @keyframes animationCard {
    0% {
      height: 0%;
      opacity: 0.4;
    }
    100% {
      height: 100%;
      opacity: 1;
    }
  }
`;

export const ContainerPai = styled.div`
  display: none;

  @media (min-width: 1581px) {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgba(238, 245, 255, 0.125);
    backdrop-filter: blur(5px);
    z-index: 35;
  }
`;

export const DivShowcase = styled.div`
  z-index: 2;
  display: flex;
  overflow-x: scroll;
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 450px;
  width: 100%;
  background-color: #fff5f5;
  border: 1px solid #2b2d42;
  padding-top: 50px;
  border-radius: 10px;
  border-bottom: none;
  overflow-y: hidden;

`;

export const ListShowcase = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
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
  transition: 0.6s;

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

  div {
    display: flex;
  }

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 30px;
    width: 100%;
  }

  p {
    font-size: 1.3rem;
    margin-left: 10px;
    font-family: "Roboto";
    margin-bottom: -185px;
  }

  span {
    font-size: 1.2rem;
    color: #8d99ae;
    margin-bottom: -180px;
    margin-right: 5px;

  }


  &:hover {
    width: 278px;
    transition: 0.6s;
    box-shadow: 14px 14px 20px #111111;
    margin-left: 15px;
    margin-right: 17px;
    margin-top: -10px;
  }

  @media (min-width: 1024px) {
  }
`;

