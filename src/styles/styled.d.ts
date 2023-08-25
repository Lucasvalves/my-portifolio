// import styled from 'styled-components';
// declare module 'styled-components'
// export interface DefaultTheme {

//   colors:{
//     primary: string;
//     secundary: string;
  
//     //background:string;
//     // text: string
//   }

// }

import theme from "../styles";

type Theme = typeof theme.dark;


declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}