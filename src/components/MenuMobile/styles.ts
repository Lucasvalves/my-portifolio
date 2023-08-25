import styled, { css } from 'styled-components';
interface IContainerProps {
  isVisible: boolean;
}

export const Container = styled.section<IContainerProps>`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    34deg,
    rgba(34, 33, 33, 0.972) 0%,
    rgba(1, 1, 1, 0.972) 95%
  );
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: 0.5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
    cursor: pointer;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: scale(0.7);
    transition: 0.7s;
  }
  li {
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
  li:hover {
    color: var(--gray-300);
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);
      > svg {
        transform: rotate(0deg);
      }

      nav {
        transform: scale(1);
      }
    `}
`;
