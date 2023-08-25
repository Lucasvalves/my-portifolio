import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 500;
    height: 6rem;
    .icon {
      width: 1.6rem;
      margin-left: 0.8rem;
      @media (max-width: 330px) {
        width: 1.4rem;
      }
    }
    p {
      color: ${theme.colors.text};
    }
    span {
      color: var(--blue);
      font-weight: 600;
    }
    .icon:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
    @media (max-width: 330px) {
      font-size: 0.6rem;
    }
    @media (min-width: 331px) and (max-width: 480px) {
      font-size: 0.8rem;
    }
  `}
`;
