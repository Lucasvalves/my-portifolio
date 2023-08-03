import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: var(--black-100);
  .title{
    width: 90%;
    margin-top: 10px;
    border: 1px red solid;
  }
  .title h2{
    font-size: 1.25rem;
    font-weight: 600;
  }
  .title p{
    color: var(--gray-300);
  }
  .show-skills{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  .show-skills >div{
    background-color: var(--black-200);
    border: solid 1px var(--gray-200);
    border-radius: 8px;
    height: 110px; 
    flex: 1 1 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .show-skills >div img{
    height: 60px; 
    width: 60px; 
  }
  .show-skills >div span{
    color: var(--gray-300);
  }
  .show-skills >div:hover{
    border: var(--primary) solid 1px;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transition: all 1s ease 0s, opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s;
  }
  /* @media(min-width: 1201px) {
    .title{
      width: 60%;
    }
    .show-skills{
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
  } */

  @media(min-width: 768px) and (max-width: 1023px){
    .title{
      width: 80%;
    }
    .show-skills{
      width: 80%;
    }
  }
  @media(min-width: 1024px) and (max-width: 1200px){ 
    background-color: #661aff49;
    .title{
      width: 80%;
    }
    .show-skills{
      width: 80%;
    }
  }
  @media(min-width: 1201px) {
    background-color: var(--black-100);
    .title{
      width: 60%;
    }
    .show-skills{
      width: 60%;
    }
  }

`;

