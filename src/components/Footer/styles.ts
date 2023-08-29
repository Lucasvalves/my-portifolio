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

    p {
      color: ${theme.colors.text};
      width: 80%;
      text-align: center;
    }
    span {
      color: var(--blue);
      font-weight: 600;
    }
    @media (max-width: 330px) {
      font-size: 0.6rem;
      p {
        text-align: left;
      }
    }
    @media (min-width: 331px) and (max-width: 480px) {
      font-size: 0.8rem;
      p {
        text-align: left;
      }
    }
  `}
`;
