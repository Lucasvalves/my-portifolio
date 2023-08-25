import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    padding: 72px 20px;
    background-color: ${theme.colors.secundary};

    .grid-layout {
      max-width: 1140px;
      margin: 0 auto;
      padding-bottom: 80px;
    }
    .grid-layout > h2 {
      width: 90%;
      font-size: 1.25rem;
      font-weight: 600;
      white-space: nowrap;
      margin-top: 10px;
      margin: 0 auto;
      padding: 80px 0 5px 0;
    }
    .grid-layout > div {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 10px;
      margin-bottom: 5%;
      margin: 0 auto;
    }
    .show-projetcs {
      height: 300px;
      flex: 1 1 200px;
      border: solid 1px ${theme.colors.border};
      background-color: ${theme.colors.primary};
    }
    .container-img {
      width: 100%;
      height: 45%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .container-img img {
      width: 90%;
      height: 80%;
    }
    .container-data {
      height: 55%;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 0.8rem;
    }
    .align-items {
      width: 90%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      gap: 10px;
      margin-bottom: 5px;
    }
    .align-items h4 {
      font-size: 1rem;
      font-weight: 600;
    }
    .links {
      display: flex;
      justify-content: center;
      gap: 5px;
    }
    a:hover {
      color: var(--gray-300);
      transition: 0.5s;
    }
    .container-data > p {
      margin: 0 10px;
      width: 90%;
      height: 60%;
      text-align: justify;
      text-indent: 20px;
      color: var(--gray-300);
    }
    .seeMore {
      padding-top: 40px; 
      max-width: 1140px;
      margin: auto;
      display: flex;
      justify-content: center;
      color: ${theme.colors.text};
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      .grid-layout > h2 {
        width: 78%;
        font-size: 1.953rem;
      }
      .grid-layout > div {
        width: 78%;
      }
    }
    @media (min-width: 1024px) and (max-width: 1200px) {
      //height: 100vh;
      .grid-layout > h2 {
        width: 78%;
        font-size: 1.953rem;
      }
      .grid-layout > div {
        width: 78%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    @media (min-width: 1201px) {
      .grid-layout > h2 {
        font-size: 1.953rem;
      }
      .grid-layout > div {
        flex-wrap: nowrap;
      }
    }
  `}
`;
