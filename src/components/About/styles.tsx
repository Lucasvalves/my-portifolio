import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  width: 100%;
  height: 100vh;
  background-color: var(--black-100);
  >div{
    border: solid 1px #9ca3af56; 
    background-color: var(--black-200);
    width: 70%;
    height: 60vh;
    display: flex;
  }
  .wrapper-left{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .frame{
    margin-left: 10rem;
    margin-top: 40px;
    width: 20rem;
    padding-bottom: 30px;
    border: 3px solid var(--primary); 
  } 
  .frame img{
    width: 100%;
    height: 25rem;
    margin-top: -40px;
    margin-left: calc(0% - 40px);
  }
  .wrapper-right{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .wrapper-right h1{
    font-size: 2rem;
  }
  .wrapper-right div{
    width: 60%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }
  .wrapper-right >span{
    width: 60%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
  }
  a:first-child{
    text-decoration: underline;
  }
  
`;

