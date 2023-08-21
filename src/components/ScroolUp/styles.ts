import styled from 'styled-components';

export const Container = styled.span`
  .arrow-on {
    border: none;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--blue);
    color: var(--white);
    border-radius: 5px;
    cursor: pointer;
    right: 1rem;
    bottom: 1rem;
    z-index: 2;
    display: none;
  }
  .arrow-off {
    display: flex;
  }
`;
