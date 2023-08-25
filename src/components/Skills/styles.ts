import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    padding: 72px 20px;
    .grid-layout {
      max-width: 1140px;
      margin: 0 auto;
      padding-bottom: 20px;
    }
    .title {
      width: 95%;
      margin-top: 10px;
      margin: 0 auto;
    }
    .title h2 {
      font-size: 1.25rem;
      font-weight: 600;
    }
    .title p {
      color: var(--gray-300);
      margin-bottom: 10px;
    }
    .show-skills {
      width: 95%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }
    .show-skills > div {
      background-color: ${theme.colors.secundary};
      color: ${theme.colors.text};
      border: solid 1px ${theme.colors.border};
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
      margin: 20px 0;
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
        border-radius: 8px;
        height: 130px;
        flex: 1 0 200px;
      }
    }
    @media (min-width: 1024px) {
      .title {
        width: 75%;
      }
      .title h2 {
        font-size: 1.953rem;
      }
      .show-skills {
        width: 80%;
      }
      .show-skills > div {
        border-radius: 8px;
        height: 130px;
        flex: 0 0 190px;
      }
    }
    @media (min-width: 1201px) {
      background-color: var(--primary);
      .title {
        width: 90%;
      }
      .show-skills {
        width: 90%;
      }
      .show-skills > div {
        height: 130px;
        flex: 1 0 250px;
      }
    }
  `}
`;
