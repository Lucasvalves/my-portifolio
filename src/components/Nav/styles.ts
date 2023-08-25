import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    color: ${theme.colors.text};
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
  `}
`;
