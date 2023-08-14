import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--black-100);
  > div {
    border: solid 1px var(--gray-200);
    background-color: var(--black-200);
    width: 90%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 3%;
  }
  .wrapper-left {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .frame {
    width: 100%;
    height: 100%;
    border: 10px solid var(--primary);
  }
  .frame img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
  .wrapper-right {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
  }
  .wrapper-right h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .wrapper-right > div {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
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
  }
  a:first-child:hover {
    color: var(--gray-300);
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
  @media (max-width: 360px) {
    > div {
      height: 85vh;
      width: 96%;
    }
    .wrapper-left {
      height: 40%;
    }
    .wrapper-right {
      height: 60%;
    }
    .wrapper-right h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .wrapper-right p {
      font-size: 0.65rem;
    }
    .wrapper-right > span {
      gap: 10px;
    }
    .wrapper-right a Button {
      font-size: 0.65rem;
      svg {
        display: none;
      }
    }
  }
  @media (min-width: 480px) and (max-width: 767px) {
    > div {
      width: 90%;
      height: 95vh;
      gap: 1%;
    }
    .wrapper-left {
      height: 50%;
    }
    .frame {
      margin-top: -1px;
      padding-bottom: 22px;
      width: 100%;
      height: 100%;
      border: 10px solid var(--primary);
      background-color: var(--primary);
    }
    .frame img {
      width: 100%;
      height: 106%;
      margin-top: 0px;
      margin-bottom: calc(75% - 27px);
      margin-left: calc(0% - 0px);
    }
    .wrapper-right > div {
      width: 90%;
      margin: 15px;
      margin-top: 0px;
    }
    .wrapper-right p {
      font-size: 1rem;
    }
    .wrapper-right > span {
      height: 0;
      margin-top: 10px;
    }
    a:first-child,
    .or {
      font-size: 1rem;
    }
    Button {
      margin-bottom: 10px;
      font-size: 1rem;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 80vh;
    background-color: blue;
    > div {
      width: 80%;
      gap: 0.1rem;
      display: flex;
      flex-direction: row;
      height: 60%;
    }
    .wrapper-left {
      height: 100%;
      width: 50%;
    }
    .frame {
      width: 20rem;
      height: 50%;
      border: 10px solid var(--primary);
    }
    .wrapper-right {
      width: 50%;
      height: 100%;
      align-items: center;
      justify-content: center;
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
      gap: 0.1rem;
      display: flex;
      flex-direction: row;
      height: 60vh;
    }
    .wrapper-left {
      height: 100%;
      width: 50%;
    }
    .frame {
      height: 60%;
      margin-left: 1.5rem;
      margin-top: 40px;
      width: 80%;
      border: 10px solid var(--primary);
    }
    .frame img {
      width: 100%;
      height: 100%;
      margin-top: -35px;
      margin-left: calc(0% - 35px);
      border-radius: 2px;
    }
    .wrapper-right {
      width: 50%;
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
    .wrapper-right > span {
      height: 20%;
      gap: 0.5rem;
    }
    .wrapper-right a,
    .or {
      font-size: 0.9rem;
    }
    Button {
      margin-bottom: 10px;
      font-size: 0.9rem;
    }
  }
  @media (min-width: 1201px) {
    background-color: var(--black-100);
    > div {
      width: 60%;
    }
    .wrapper-left {
      width: 50%;
    }
    .frame {
      margin-left: 3rem;
      width: 60%;
      height: 60%;
      padding-bottom: 0px;
    }
    .frame img {
      height: 100%;
    }
    .wrapper-right {
      width: 43%;
      display: flex;
      justify-content: center;
    }
    .wrapper-right > h2 {
      font-size: 1.953rem;
      height: 10%;
    }
    .wrapper-right div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: auto;
    }
    .wrapper-right p {
      font-size: 1rem;
    }
    .wrapper-right > span {
      height: 15%;
      gap: 1rem;
    }
    .wrapper-right a,
    .or {
      font-size: 1rem;
    }
    Button {
      margin-bottom: 4px;
      font-size: 1rem;
    }
  }
`;
