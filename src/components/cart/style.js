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
  height: 100vh;
  padding: 5rem 1.143rem 0;
  position: absolute;
  z-index: 15;
  color: black;
  display: flex;
  max-width: 700px;
  background-color: var(--background);
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 120px;
    margin-top: 50px;
  }

  span {
    width: 100px;
    height: 200px;
    margin: 0 auto;
    z-index: 20;
    position: absolute;
    color: black;
  }
  svg {
    cursor: pointer;
    position: relative;
    margin-right: 15px;
    margin-bottom: 18px;
  }
  h2 {
    color: black;
    font-size: 1.7rem;
    margin-left: 15px;
    font-family: "Roboto";
  }
  button {
    margin: 5px;
  }

  @media (min-width: 1024px) {
    right: 0;
    top: 0;
    width: 25%;
    min-height: 100vh;
    padding-top: 0;
    padding-left: 4rem;
    z-index: 35;
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

  @media (min-width: 1024px) {
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
