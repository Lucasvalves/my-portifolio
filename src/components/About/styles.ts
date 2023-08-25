import styled, { css } from 'styled-components';

export const Container = styled.section`
  padding: 72px 20px;
  ${({ theme }) => css`
    .grid-layout {
      max-width: 1140px;
      margin: 0 auto;
    }
    .grid-layout > div {
      border: solid 1px ${theme.colors.border};
      margin: 0 auto;
      background-color: ${theme.colors.secundary};
    }
    .wrapper-left {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 18.75rem;
      margin: auto;
      margin-top: 20px;
    }
    .frame {
      width: 100%;
      height: 100%;
      border: 10px solid var(--blue);
    }
    .frame img {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
    .wrapper-right {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10px;
      box-sizing: border-box;
   
    }
    .wrapper-right h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 10px 0px;
    }
    .wrapper-right > div {
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .wrapper-right p {
      text-align: justify;
      text-indent: 20px;
      font-size: 0.8rem;
      color: var(--gray-300);
    }
    .wrapper-right > span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      height: 50%;
      white-space: nowrap;
    }
    a:first-child {
      text-decoration: underline;
      font-size: 0.8rem;
      color: var(--gray-100);
    }
    a:first-child:hover {
      color: var(--gray-300);
    }
    .or {
      font-size: 0.8rem;
    }
    Button {
      font-size: 0.8rem;
      padding: 2px;
      > svg {
        height: 20px;
        margin-top: 2px;
      }
    }
    @media (min-width: 480px) and (max-width: 767px) {
      .frame {
        width: 100%;
        height: 100%;
        background-color: var(--blue);
      }
      .frame img {
        height: 100%;
      }
      .wrapper-right p {
        font-size: 1rem;
      }
      .wrapper-right > span {
        height: 0;
        margin: 20px 0px;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      > div {
        width: 80%;
      }
      .wrapper-left {
        margin-top: 30px;
      }
      .wrapper-right p {
        font-size: 0.9rem;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
      .wrapper-right > span {
        margin-top: 10px;
        height: 10%;
      }
      a:first-child,
      .or {
        font-size: 0.8rem;
      }
      Button {
        margin-bottom: 10px;
        font-size: 0.8rem;
      }
    }
    @media (min-width: 1024px) {
      > div {
        width: 80%;
      }
      .wrapper-left {
        width: 100%;
        height: 400px;
      }
      .frame {
        margin-left: 0px;
        width: 90%;
      }
      .frame img {
        width: 100%;
        height: 100%;
      }
      .wrapper-right {
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      .wrapper-right > h2 {
        margin-top: 10px;
        margin-bottom: -10px;
        font-size: 1.953rem;
      }
      .wrapper-right > div {
        margin-top: 10px;
        height: 53%;
      }
      .wrapper-right p {
        font-size: 1rem;
      }
    }
    @media (min-width: 1201px) {
      padding: 72px 0px;
      .grid-layout {
        max-width: 1020px;
      }
      .grid-layout > div {
        height: auto;
        display: flex;
        align-items: center;
        width: 100%;
      }
      .wrapper-left {
        width: 47%;
        height: 500px;
      }
      .frame {
        margin-left: 3rem;
        width: 60%;
        height: 60%;
        padding-bottom: 0px;
      }
      .frame img {
        width: 100%;
        height: 102%;
        margin-top: -25px;
        margin-left: calc(0% - 25px);
      }
      .wrapper-right {
        width: 49%;
      }
      .wrapper-right h2 {
        font-size: 1.953rem;
        margin-bottom: 10px;
      }
      .wrapper-right > div {
        gap: 0.8rem;
        margin-bottom: 20px;
      }
      .wrapper-right p {
        font-size: 1rem;
      }
      a:first-child {
        text-decoration: underline;
        font-size: 0.8rem;
      }
      .or {
        font-size: 0.8rem;
      }
      Button {
        font-size: 0.8rem;
        > svg {
          height: 20px;
          margin-top: 2px;
        }
      }
    }
  `}
`;
