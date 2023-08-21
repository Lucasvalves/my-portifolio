import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 400;
  height: 7rem;
  .icon {
    width: 1.6rem;
    margin-left: 0.8rem;
    margin-bottom: 0.3rem;
    @media (max-width: 330px) {
      width: 1.4rem;
    }
  }
  .icon:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
  @media (max-width: 330px) {
    font-size: 0.6rem;
  }
  @media (min-width: 331px) and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
