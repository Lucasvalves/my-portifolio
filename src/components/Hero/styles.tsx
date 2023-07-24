import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.52rem;
  width: 100%;
  height: 100vh;
  background-color: var(--black-100);
  
  .welcome{
    display: block;
    font-family: "caveat";
  }
  .name {
    font-weight: 600;
    background-image: linear-gradient(90deg,  rgba(9,9,121,1) 0%, #0D52FF 50%, rgba(0,212,255,1) 100%);
    color: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .lastName{
    color: var(--primary);
    font-weight: 400;
    margin-left: .5rem;
  }
  .center{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon{
    width: 2rem;
    height: auto;
    margin-left: 1rem;
    @media(max-width: 620px) {
      width: 1.5rem;
    }
    @media(max-width: 430px) {
      width: 1.2rem;
    }
    @media(max-width: 320px) {
      width: .9rem;
    }
  }
  .icon:hover{
    transform: scale(1.1);
    transition: 0.5s;
  }
  .job{
    display: flex;
    font-weight: 400;
    align-items: center;
    gap: .8rem;
    font-size: 1.25rem;
    @media(max-width: 620px) {
      font-size: 1rem;
    }
    @media(max-width: 430px) {
      font-size: .9rem;
    }
    @media(max-width: 320px) {
    font-size: .6rem;
    }
  }
  .line{
    width: 2.5rem;
    height: .2rem;
    border-radius: 1rem;
    background-color: var(--primary);
    @media(max-width: 620px) {
      width: 1.8rem;
    }
    @media(max-width: 430px) {
      width: 1.5rem;
    }
    @media(max-width: 320px) {
      width: 1rem;
    }
  }
  @media(max-width: 850px) {
    font-size: 2.52rem;
  }
  @media(max-width: 620px) {
    font-size: 2rem;
  }
  @media(max-width: 430px) {
    font-size: 1.5rem;
  }
  @media(max-width: 320px) {
    font-size: .8rem;
  }

`;

