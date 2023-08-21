import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 0;
  background: var(--primary);
  color: var(--gray-100);
  padding: 24px 0;
  position: fixed;
  > section {
    display: flex;
    gap: 4rem;
    width: 60%;
    &:last-child {
      gap: 1rem;
    }
  }
  .container-menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 10px 0; */
  }
  .container-menu a {
    cursor: pointer;
  }
  .container-menu a > img {
    width: 100px;
    @media (max-width: 500px) {
      width: 50px;
    }
  }
  > section section:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mobile {
    display: none;
  }
  @media (max-width: 990px) {
    > section {
      width: 80%;
    }
    .mobile {
      display: initial;
      cursor: pointer;
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
`;
