import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 0;
  background: var(--black-100);
  color: var(--gray-100);
  padding: 14.5px 60px;
  position: fixed;
  >section:last-child{
    display: flex;
    justify-content: flex-end;
  }
  >section {
    display: flex;
    gap: 4rem;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    @media(max-width: 900px) {
        width: 50%;
    }
    &:last-child {
      gap: 1rem;
    }
    >span{
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: end;
    }
    >span a{
      cursor: pointer;
    }
    >span a> img{
      width: 100px;
      height: auto;
      margin-top: -10px;
      @media(max-width: 500px) {
        width: 50px;
      }
    }
    .mobile {
      display: none;
    }
    @media(max-width: 915px) {
      .mobile {
        display: initial;
        cursor: pointer;
      }
      nav{
        display: none;
      }
    }
  }

  @media(max-width: 700px) {
    padding: 14.5px 25px;
  }
`;