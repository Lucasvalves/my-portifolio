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

 
`;
