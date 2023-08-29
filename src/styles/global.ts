import { createGlobalStyle, css } from 'styled-components';
import light from './themes/light';
import dark from './themes/dark';

export default { light, dark };

export const GlobalStyle = createGlobalStyle`

   :root {
     --white: #ffff;
     --gray-100: #f0f0f0;
     --gray-200: #1f1f1f;
     --gray-300: #9ca3af;
     --blue: #0d52ff; 
     --box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
   }
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;

     ::-webkit-scrollbar {
       width: 7px;
       height: 5px;
       transition: 0.3s;
     }
     ::-webkit-scrollbar-thumb {
       background: var(--blue);
       border-radius: 10px;
     }
     ::-webkit-scrollbar-track {
       background: var(--primary);
       border-radius: 10px;
     }
   }
   body {
     font-family: 'Poppins', sans-serif;
   }
   button {
     cursor: pointer;
   }
   a {
     color: inherit;
     text-decoration: none;
   }
   ul {
     list-style: none;
   }

   img {
     width: 100%;
     max-width: 100%;
   }
 ${({ theme }) => css`
   body {
     background-color: ${theme.colors.primary};
     color: ${theme.colors.text};
   }
 `}

`;
