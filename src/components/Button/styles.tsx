import styled from 'styled-components';

export const Container = styled.span`
  >button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border: solid 1px #ffffffe9;
    background-color: var(--white);
    color: var(--black-200);
    margin-top: .5rem;
    padding: .4rem;
    font-size: .8rem;
    font-family: 'Poppins', sans-serif;
    border-radius: .2rem;
    transition: .5s;
    @media(max-width: 700px) {
      font-size: .7rem;
      display: flex;
      flex-wrap: nowrap;
      gap: 2px;
    }
    @media(max-width: 660px) {
      font-size: .6rem;
      display: flex;
      flex-wrap: nowrap;
      font-weight: 600;
      >svg{
        display: none;
      }
    }
  }
  >button:hover{
    background-color: #ffffffdf;
  }  
`;