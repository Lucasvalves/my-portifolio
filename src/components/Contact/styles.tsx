import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  background-color: var(--black-200);
  .title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin-top: 2rem;
  }
  .title h2{
    font-size: 1.953rem;
  }
  .title p{
    font-size: 1rem;
  }
  .wrapper-primary{
    display: flex;
    width: 60%;
    gap: 1rem;
  }
  .wrapper-left{
    display: flex;
    align-items: center;
    width: 70%;
    font-size: 1rem;
  }
  .container-show-inputs{
    display: flex;
    align-items: center;
    margin-bottom: .5rem;
    font-weight: 600;
    gap: 1rem;
    width: 100%;
  }
  .align-inputs{
    width: 20rem;
    margin-top: 1rem;
  }
  .input, textarea{
    background-color: transparent;
    color: var(--gray-200);
    border: solid 1px var(--gray-200);
    border-radius: .2rem;
  }
  textarea{
    width: 100%;
    height: 8rem;
    resize:none;
    font-size: 1rem;
  }
  .input{
    height: 2rem;
    width: 100%;
  }
  Button{
    width: 12rem;
  }
  .spinner{
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    to{
      transform: rotate(360deg)
    }
  }
  .wrapper-right{
    display: flex;
    align-items: center;
    width: 30%;
    font-size: 1rem;
  }
  .contactsLinks a{
    display: flex;
    justify-content: center;
    border: dashed 1px var(--gray-200);
    border-radius: .5rem;
    width: 21rem;
    height: 6rem;
    margin-bottom: 20px;

  }
  span:first-child{
    display: flex;
    justify-content: center;
    align-items: center;  
    width: 20%;
    font-size: 40px;
  }
  span:first-child:hover{
    transform: scale(1.1);
    transition: 0.5s;
  }
  span:last-child{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
  }
  h4:first-child{
    font-size: 1rem;
    font-weight: 600;
  }
  h4:first-child:hover{
    color: #ffffffc2;
    transition: .5s;
  }
  h4:last-child{
    color: var(--gray-200);
    font-size: 1rem;
    font-weight: 200;
    text-decoration: underline;
  }
  h4:last-child:hover{
    color: #9ca3afd6;
    transition: .5s;
  }   

`;

