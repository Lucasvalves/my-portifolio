import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:  column;
  width: 100%;
  background-color: var(--black-200);
  background-color: red;
  >h2{
    width: 90%;
    font-size: 1.25rem;
    font-weight: 600;
    white-space: nowrap;
    margin-top: 10px;
  }
  >div{
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
    height: 300px;
    border: solid 1px var(--gray-200);
    flex: 1 1 200px;
    background-color: #10101083;
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
  .align-items{
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-bottom: 5px;
  }
  .align-items h4{
    font-size: 1rem;
    font-weight: 600;
  }
  .links{
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  .links a:hover{
    color: var(--gray-300);
    transition: .5s;
  }
  .container-data >p{
    margin: 0 10px;
    width: 90%;
    height: 60%;
    text-align: justify;
    text-indent: 20px;
    color: var(--gray-300);
  }
  @media(min-width: 768px) and (max-width: 1023px){
    >h2{
      width: 80%;
    }
    >div{
      width: 80%;
    }
  }
  @media(min-width: 1024px) and (max-width: 1200px){ 
    background-color: #6ffb114a;
    >h2{
      width: 80%;
    }
    >div{
      width: 80%;
      display: flex;
      justify-content: center;
      /* flex-direction: column; */
      align-items: center;
      border: 1px solid blue;
    }
  }
  @media(min-width: 1201px) {
    background-color: #09c0f34b;
    background-color: var(--black-200);
    >h2{
      width: 60%;
    }
    >div{
      width: 60%;
      flex-wrap: nowrap;
    }
  }

`;

