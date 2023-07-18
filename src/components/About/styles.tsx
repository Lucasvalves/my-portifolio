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
    height: 70vh;
    display: flex;
  }
  .wrapper-left{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid red; 
  }
  .frame{
    margin-left: 10rem;
    padding-bottom: 30px;
    width: 100%;
    height: auto;
    border: 4px solid var(--primary); 
  } 
  .frame img{
    width: 100%;
    height: auto;
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
  a:last-child{
    border: solid 1px #ffffffe9;
    background-color: var(--white);
    color: var(--black-200);
    padding: .2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    border-radius: .2rem;
    font-weight: 400;
    transition: .5s;
  }
  a:last-child:hover{
    background-color: #ffffffdf;
  }
  
`;

