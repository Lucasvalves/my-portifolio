import styled from 'styled-components';

export const Container = styled.nav`
  width: 100rem;
  > ul {
    display: flex;
    gap: 2rem;
    justify-content: end;
    align-items: center;
    height: 100%;
  }
  li {
    cursor: pointer;
  }
  li > .active {
    color: var(--gray-300);
  }

  a {
    font-size: 1rem;
    position: relative;
    &:before {
      content: '';
      border-radius: 50px;
      bottom: 0;
      position: absolute;
      width: 0%;
      height: 1px;
      background-image: linear-gradient(
        90deg,
        rgba(9, 9, 121, 1) 0%,
        #0d52ff 50%,
        rgba(0, 212, 255, 1) 100%
      );
      transition: 0.5s;
    }

    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
`;
