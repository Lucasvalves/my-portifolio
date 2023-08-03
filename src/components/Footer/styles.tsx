import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 400; 
  width: 100%;
  height: 7rem;
  background-color: var(--black-100);

  .icon{
    width: 1.6rem;
    height: auto;
    margin-left: .8rem;
    margin-bottom: 0.3rem;
    @media(max-width: 330px) {
      width: 1.4rem;
    }
  }
  .icon:hover{
    transform: scale(1.1);
    transition: 0.5s;
  }
  @media(max-width: 330px) {
    font-size: .6rem;
  }
`;

