import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:  column;
  font-size: 1rem;
  width: 100%;
  height: 100vh;
  background-color: var(--black-100);
  >h2{
    width: 60%;
    font-size: 1.953rem;
    font-weight: 600;
    white-space: nowrap;
  }
  >div{
    background-color: blue;
    width: 60%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  .show-projetcs{
    height: 40%;
    border: solid 1px #9ca3af56; 
    flex: 1 1 200px;
    background-color: #111111;
    border-radius: 10px;
  }
  .show-projetcs p{
    font-size: .8rem;
  }
  .container-img{
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container-img img{
    width: 80%;
    height: 80%;
  }
  .container-data{
    height: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .links{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    width: 50%;
  }
`;

