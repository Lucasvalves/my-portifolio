import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:  column;
  width: 100%;
  background-color: var(--black-100);
  background-color: red;
  >h2{
    width: 90%;
    font-size: 1.953rem;
    font-weight: 600;
    white-space: nowrap;
    margin-top: 10px;
  }
  >div{
    background-color: blue;
    width: 90%;
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-wrap: wrap ;
    gap: 20px;
    margin-top: 10px;
    margin-bottom: 5%;
  }
  .show-projetcs{
    height: 400px;
    border: solid 1px #9ca3af56; 
    flex: 1 1 200px;
    background-color: #111111;
    border-radius: 10px;
  }
  .container-img{
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container-img img{
    width: 90%;
    height: 80%;
  }
  .container-data{
    height: 55%;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: .8rem;
  }
  .container-data h4{
    font-size: 1rem;
    margin-bottom: 5px;
  }
  .container-data >p{
    margin: 0 10px;
    width: 90%;
    height: 60%;
    text-align: justify;
    text-indent: 20px;
  }
  .align-items{
    width: 90%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .links{
    display: flex;
    justify-content: center;
  }
  .links >div{
    display: flex;
    justify-content: center;
  }
  @media(min-width: 768px) and (max-width: 1400px){ 
    >h2{
      width: 80%;
    }
    >div{
    background-color: #00fbffb9;
    width: 80%;
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    align-items: center;
    flex-wrap: nowrap;
  }
  .show-projetcs{
    flex: 1 1 200px;
   }
  }
  @media(min-width: 1201px) {
    background-color: #09c0f34b;
    >h2{
      width: 60%;
  
    }
    >div{
      width: 60%;
      flex-wrap: nowrap;
    }
  }
`;

