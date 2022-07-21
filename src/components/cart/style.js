import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(500px)
    }
    to{
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const DivGlobal = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  position: fixed;
  z-index: 45;
`;

export const ContainerPai = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow-y: hidden;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgba(238, 245, 255, 0.125);
  backdrop-filter: blur(5px);
  z-index: 25;
`;

export const ContainerCarrinho = styled.div`
  background: #fff5f5;
  width: 100vw;
  max-width: 450px;
  overflow-y: hidden;
  right: 0;
  z-index: 35;
  position: fixed;
  overflow-x: hidden;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  animation: ${appearFromRight} 1s;
  padding: 2rem;
  align-items: center;
`;

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  svg {
    cursor: pointer;
    width: 35px;
    height: 50px;
  }

  h2 {
    font-family: "Roboto";
    font-size: 1.4rem;
  }
`;

export const ContainerULCart = styled.div`
  display: flex;
`;

export const UlCarrinho = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LiCarrinho = styled.li`
  display: flex;
  justify-content: space-around;
  width: 95vw;
  max-width: 400px;
  align-items: center;
  background: #ffffff;
  border: 3px solid #2b2d42;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 10px;

  img {
    width: 75px;
    height: 75px;
    border-radius: 100%;
  }

  h2 {
    font-family: "Roboto";
    font-size: 1rem;
    width: 250px;
    text-align: center;
  }
`;

export const DivLiInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-bottom: 10px;
  }

  span {
    color: #8d99ae;
    font-weight: bold;
    margin-right: 5px;
  }

  p {
    background-color: gray;
    font-weight: bold;
    padding: 5px;
    border-radius: 5px;
    color: #2b2d42;
  }
`;

export const DivBotCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    p,
    span {
      margin-bottom: 10px;
      font-weight: bold;
    }

    span {
      margin-right: 10px;
    }

    p {
      margin-left: 10px;
    }

    button + button {
      margin-left: 40px;
    }
  }
`;

export const DivCartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: "Roboto";
    font-size: 1.2rem;
  }

  svg {
    width: 100px;
    height: 120px;
  }
`;
