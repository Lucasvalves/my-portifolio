import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --white: #ffff;
    --gray-100: #f0f0f0;
    --gray-200: #1f1f1f;
    --gray-300: #9ca3af;
    --primary: #0D52FF;
    --black-100: #111111;
    --black-200: #151515;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 7px;
      height: 5px;
      transition:.3s;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: var(--black-100);
      border-radius: 10px;
    }
  }

  body {
    background: var(--black-100);
    color:  var(--gray-100);
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul{
    list-style:none;
  }

  img {
    width: 100%;
    max-width: 100%;
  }
`