import styled from 'styled-components';

export const Container = styled.section`
  padding: 72px 20px;
  background-color: var(--secundary);
  .grid-layout {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin-top: 10px;
  }
  .title h2 {
    font-size: 1.25rem;
    font-weight: 600;
    white-space: nowrap;
  }
  .title p {
    font-size: 1rem;
    color: var(--gray-300);
  }
  .wrapper-primary {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    gap: 3%;
  }
  .wrapper-left {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 1rem;
  }
  form {
    width: 100%;
  }
  .container-show-textarea {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    width: 100%;
    margin-top: 0.5rem;
  }
  .container-show-inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    font-weight: 600;
    gap: 5%;
    width: 100%;
  }
  .align-inputs {
    margin-top: 1rem;
    width: 100%;
  }
  .input,
  textarea {
    background-color: transparent;
    color: var(--gray-300);
    border: solid 1px #9ca3af90;
    border-radius: 5px;
  }
  textarea {
    width: 100%;
    height: 7rem;
    resize: none;
    font-size: 1rem;
  }
  .input {
    height: 2rem;
    width: 100%;
  }
  .spinner {
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .wrapper-right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .contactsLinks {
    width: 80%;
  }
  .contactsLinks a {
    display: flex;
    justify-content: center;
    border: dashed 1px #9ca3af90;
    border-radius: 0.5rem;
    width: 95%;
    height: 5.5rem;
    margin-bottom: 20px;
  }
  span:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    font-size: 30px;
    color: red;
  }
  span:first-child:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
  span:last-child {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 85%;
  }
  .contactsLinks h4:first-child {
    font-size: 0.8rem;
    font-weight: 600;
  }
  .contactsLinks h4:first-child:hover {
    color: #ffffffc2;
    transition: 0.5s;
  }
  .contactsLinks h4:last-child {
    color: var(--gray-300);
    font-size: 0.8rem;
    font-weight: 200;
    text-decoration: underline;
  }
  .contactsLinks h4:last-child:hover {
    color: #9ca3afca;
    transition: 0.5s;
  }
  Button {
    width: 60%;
    height: 2rem;
    font-size: 0.8rem;
    margin: 10px 0 20px 0;
    > svg {
      margin-bottom: 0;
    }
  }
  @media (max-width: 360px) {
    .title {
      margin-top: -30px;
    }
    .title p,
    .wrapper-left {
      font-size: 0.8rem;
    }
    .container-show-textarea {
      display: flex;
      flex-direction: column;
      margin-bottom: 0;
      font-weight: 600;
      width: 100%;
    }
    textarea {
      height: 6rem;
    }
    .container-show-inputs {
      margin-bottom: 0;
      gap: 0;
    }
    .align-inputs {
      margin-top: 10px;
    }
    .contactsLinks {
      width: 100%;
    }
    .contactsLinks a {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 4rem;
      margin-bottom: 10px;
    }
    form span{
      width: 100%;
      margin: auto;
    }
    Button {
      width: 100%;
    }
  }
  @media (min-width: 480px) and (max-width: 767px) {
    .container-show-textarea {
      margin-bottom: -0.5rem;
    }
    .container-show-inputs {
      flex-direction: row;
    }
    .contactsLinks a {
      height: 5rem;
      margin-bottom: 10px;
    }
    .contactsLinks h4:first-child,
    .contactsLinks h4:last-child {
      font-size: 1rem;
    }
    .wrapper-right {
      font-size: 1rem;
    }
    Button {
      width: 13rem;
    }
  }
  @media (min-width: 768px) and (max-width: 1400px) {
    .title {
      width: 80%;
    }
    .title h2 {
      font-size: 1.953rem;
    }
    .wrapper-primary {
      flex-direction: row;
      width: 80%;
      height: 60%;
      gap: 3%;
    }
    .wrapper-left {
      width: 55%;
    }
    .container-show-textarea {
      margin-bottom: 0.5rem;
      width: 100%;
    }
    .container-show-inputs {
      margin-bottom: 0.5rem;
      flex-direction: row;
    }
    .align-inputs {
      width: 50%;
    }
    .wrapper-right {
      display: flex;
      align-items: center;
      width: 45%;
      font-size: 1rem;
      margin-top: 3rem;
    }
    .contactsLinks {
      width: 100%;
      margin-top: 20px;
    }
    .contactsLinks a {
      width: 100%;
      height: 5.5rem;
    }
    span:first-child {
      width: 20%;
      font-size: 35px;
    }
    Button {
      width: 10rem;
    }
    .contactsLinks h4:first-child,
    .contactsLinks h4:last-child,
    Button {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 1201px) {
    .title {
      width: 90%;
    }
    .title h2 {
      font-size: 1.953rem;
    }
    .wrapper-primary {
      flex-direction: row;
      width: 90%;
      gap: 5%;
    }
    .wrapper-left {
      width: 65%;
    }
    .container-show-textarea {
      margin-bottom: 0.5rem;
      width: 100%;
    }
    .container-show-inputs {
      margin-bottom: 0.5rem;
      flex-direction: row;
    }
    .align-inputs {
      width: 50%;
    }
    .wrapper-right {
      width: 30%;
      font-size: 1rem;
    }
    .contactsLinks {
      width: 100%;
      margin-top: 20px;
    }
    .contactsLinks a {
      width: 100%;
      height: 5.5rem;
    }
    span:first-child {
      width: 20%;
      font-size: 35px;
    }
    .contactsLinks h4:first-child {
      font-size: 1rem;
    }
    .contactsLinks h4:last-child {
      white-space: wrap;
    }
    Button {
      width: 12rem;
    }
  }
`;
