import styled from 'styled-components';

export const Container = styled.span`
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border: solid 1px #ffffffe9;
    background-color: var(--white);
    color: var(--black-200);
    margin-top: 0.5rem;
    padding: 0.4rem;
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    border-radius: 0.2rem;
    transition: 0.5s;
    > svg {
      margin-bottom: 3px;
    }
    @media (max-width: 1200px) {
      font-size: 0.8rem;
      display: flex;
      flex-wrap: nowrap;
      gap: 5px;
    }
    @media (max-width: 660px) {
      font-size: 0.6rem;
      display: flex;
      flex-wrap: nowrap;
      padding: 0.2rem;
    }
  }
  > button:hover {
    background-color: #ffffffdf;
  }
`;
