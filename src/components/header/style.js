import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 5rem;
  padding: 1.5rem;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  background-color: var(--primary-color);

  svg {
    color: #ffff;
    cursor: pointer;
    margin-left: 20px;
  }

  span {
    width: 20px;
    height: 20px;
    margin-right: -55px;
    border: solid 2px #000000;
    background-color: white;
    display: flex;
    margin-top: -8px;
    z-index: 1;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
  }

  div {
    display: flex;
  }

  @media (min-width: 1024px) {
    padding-left: 6rem;
    padding-right: 6rem;

    span {
      width: 25px;
      height: 25px;
      margin-right: -110px;
      margin-top: -5px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
    }

    svg {
      display: block;
      height: 3em;
      width: 2.2em;
      margin-left: 60px;
    }
  }
`;
export const IMGMobileTitle = styled.img`
  width: 90px;
  height: 20px;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const IMGDesktopTitle = styled.img`
  display: none;
  width: 200px;
  height: 20px;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const MenuMobile = styled.img`
  height: 3em;
  width: 2.2em;
  @media (min-width: 1024px) {
    display: none;
  }
`;
