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
    font-weight: 600;
  }
  .title p{
    font-size: 1rem;
  }
  .wrapper-primary{
    display: flex;
    width: 60%;
    height: 60%;
    gap: 5%;
    //border: 5px green solid; 
    position: relative;
  }
  .wrapper-left{
    display: flex;
    align-items: center;
    width: 65%;
    font-size: 1rem;
   // border: 1px blue solid;
  }
  form {
    width: 100%;
  }
  .container-show-textarea{
    display: flex;
    flex-direction: column;
    margin-bottom: .5rem;
    font-weight: 600;
    width: 100%;
  }
  .container-show-inputs{
    display: flex;
    margin-bottom: .5rem;
    font-weight: 600;
    gap: 5%;
    width: 100%;
  }
  .align-inputs{
    margin-top: 1rem;
    width: 50%;
  }
  .input, textarea{
    background-color: transparent;
    color: var(--gray-200);
    border: solid 1px var(--gray-200);
    border-radius: 5px;
    display: block;
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
    >svg{
      margin-bottom: 0;
    }
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
  .contactsLinks {
    width: 100%;
    margin-top: 20px;
  }
  .contactsLinks a{
    display: flex;
    justify-content: center;
    border: dashed 1px var(--gray-200);
    border-radius: .5rem;
    width: 95%;
    height: 5.5rem;
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
  .contactsLinks h4:first-child{
    font-size: 1rem;
    font-weight: 600;
  }
  .contactsLinks h4:first-child:hover{
    color: #ffffffc2;
    transition: .5s;
  }
  .contactsLinks h4:last-child{
    font-size: .8rem;
    font-weight: 200;
    text-decoration: underline;
  }
  .contactsLinks h4:last-child:hover{
    color: #ffffffc2;
    transition: .5s;
  }  
  @media(max-width: 1629px) {
    .wrapper-left textarea{
      width: 94%;
      height: 8rem;
    }
    .input{
      width: 87%;
    }
    .contactsLinks a{
      display: flex;
      justify-content: center;
      border: dashed 1px var(--gray-200);
      width: 17rem;
      height: 5.5rem;
      margin-bottom: 10px;
    }
    .contactsLinks h4:last-child{
      color: var(--gray-200);
      font-size: .8rem;
      font-weight: 200;
      text-decoration: underline;
      }
    } 
`;

