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
    display: none;
  }

  @media (min-width: 1024px) {
    padding-left: 6rem;
    padding-right: 6rem;

    svg {
      display: block;
      height: 3em;
      width: 2.2em;
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
