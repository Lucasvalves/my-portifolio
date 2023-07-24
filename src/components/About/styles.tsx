import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
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
    height: 20rem;
    margin-top: -40px;
    margin-left: calc(0% - 40px);
  }
  .wrapper-right{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: solid 1px blue; 
  }
  .wrapper-right h2{ 
    font-size: 1.953rem;
    margin-bottom: 10px;
  }
  p {
    @media(max-width: 1800px) {
      font-size: .8rem;
    }
    /* @media(max-width: 820px) {
      font-size: .7rem;
    } */
  }
  .wrapper-right div{
    width: 60%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .5rem;
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
    font-size: .8rem;
  }
  @media(max-width: 1200px) {
    >div{
      display: flex;
      flex-direction: column;
      height: 90vh;
      width: 70%;
    }
    .wrapper-left{
      width: 100%;
      height: 100%;
    }
    .frame{
      margin-left: 3rem;
      margin-top: 40px;
      width: 15rem;
      padding-bottom: 20px; 
    }
    .frame img{
      width: 100%;
      margin-top: -40px;
      margin-left: calc(0% - 30px);
    }
    .wrapper-right{
      width: 100%;
      height: 100%;
    }
    .wrapper-right >span{
      display: flex;
      flex-direction: column;
      gap: 0;
      margin-top: 1rem;
    }
    Button{
      margin-top: 0;
    }
    .wrapper-right h2{
     margin-bottom: 20px;
    }
  }
  @media(max-width: 820px) {
    >div{
      width: 90vw;
      gap: 1rem;
    }
    .wrapper-right h2{ 
      font-size: 1.25rem;
    }
    .wrapper-right >span{
      margin-top: 40px;
    }
  }
  @media(max-width: 600px) {
    
    >div{
      width: 95vw;
      gap: 1rem;
    }
    .wrapper-right {
      width: 100%;
    }
    .wrapper-right >span{
      flex-direction: column;
      gap: 1px;
    }
    .wrapper-right >h2{
      margin-top: -40px;
    }
    .wrapper-right >div{
      width: 90%;    
    }
    p{
      font-size: .8rem;
    }
    a:first-child{
      font-size: .6rem;
    }
  }
`;
