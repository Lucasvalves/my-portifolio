import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: var(--black-100);
  margin: 40px 0;
  .title {
    width: 90%;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .title h2 {
    font-size: 1.25rem;
    font-weight: 600;
  }
  .title p {
    color: var(--gray-300);
  }
  .show-skills {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  .show-skills > div {
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
  .show-skills > div img {
    height: 60px;
    width: 60px;
  }
  .show-skills > div span {
    color: var(--gray-300);
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 60px 0;
    .title {
      width: 80%;
      margin-bottom: 20px;
    }
    .title h2 {
      font-size: 1.953rem;
    }
    .show-skills {
      width: 80%;
    }
    .show-skills {
      width: 80%;
      display: flex;
      align-items: start;
      justify-content: center;
    }
    .show-skills > div {
      border: solid 1px var(--gray-200);
      border-radius: 8px;
      height: 130px;

      flex: 1 0 200px;
    }
  }
  @media (min-width: 1024px) {
    background-color: #661aff49;
    height: 80vh;
    .title {
      width: 80%;
    }
    .title h2 {
      font-size: 1.953rem;
    }
    .show-skills {
      width: 80%;
      display: flex;
      align-items: start;
      justify-content: center;
    }
    .show-skills > div {
      border: solid 1px var(--gray-200);
      border-radius: 8px;
      height: 130px;

      flex: 0 0 200px;
    }
  }
  @media (min-width: 1201px) {
    background-color: var(--black-100);
    .title {
      width: 60%;
    }
    .show-skills {
      width: 60%;
    }
    .show-skills > div {
      height: 130px;
      flex: 1 0 250px;
    }
  }
`;
