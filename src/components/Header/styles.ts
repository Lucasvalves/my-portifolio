import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    top: 0;
    color: var(--gray-100);
    padding: 24px 0;
    width: 100%;
    position: fixed;
    .wrapper {
      max-width: 1140px;
      margin: 0 auto;
    }
    .wrapper > div {
      display: flex;
      width: 90%;
      gap: 4rem;
      margin: 0 auto;
      &:last-child {
        gap: 1rem;
      }
    }
    .container-menu {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
    .container-menu a {
      cursor: pointer;
    }
    .container-menu a h1 {
      font-family: 'sora', sans-serif;
      font-weight: 600;
      white-space: nowrap;
      color: var(--blue);
      font-size: 30px;
    }
    .container-menu-mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;
    }
    .mobile {
      display: none;
    }
    @media (max-width: 1201px) {
      .wrapper > div {
        width: 80%;
      }
    }
    @media (max-width: 990px) {
      > section {
        width: 80%;
      }
      .wrapper > div {
        width: 95%;
      }
      .container-menu-mobile {
        display: initial;
      }
      .mobile {
        display: initial;
        cursor: pointer;
        color: ${theme.colors.text};
      }
      nav {
        display: none;
      }
      .container-menu {
        justify-content: start;
      }
      .container-menu a > img {
        width: 50px;
      }
    }
    @media (max-width: 700px) {
      > section {
        width: 90%;
      }
      padding: 14.5px 0px;
      .container-menu {
        justify-content: start;
      }
    }
  `}
`;
