// import styled from 'styled-components';

// export const Container = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100vh;
//   background-color: var(--black-100);
//   >div{
//     border: solid 1px #9ca3af56; 
//     background-color: var(--black-200);
//     width: 60%;
//     height: 60%;
//     display: flex;
//   }
//   .wrapper-left{
//     width: 40%;
//     display: flex;
//     align-items: center;
//     justify-content: center; 
//   }
//   .frame{
//     margin-left: 1rem;
//     margin-top: 40px;
//     width: 20rem;
//     padding-bottom: 22px;
//     border: 10px solid var(--primary); 
//   } 
//   .frame img{
//     width: 100%;
//     height: 22rem;
//     margin-top: -35px;
//     margin-left: calc(0% - 35px);
//     border-radius: 2px;
//   }
//   .wrapper-right{
//     width: 60%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     margin: 0 4rem;
//   }
//   .wrapper-right h2{ 
//     font-size: 1.953rem;
//     font-weight: 600;
//     margin-bottom: 10px;
//   }
//   p {
//     text-align: justify;
//     text-indent: 20px;
//     font-size: 1rem;
//   }
//   .wrapper-right >div{
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     gap: .8rem;
//   }
//   .wrapper-right >span{
//     width: 60%;
//     height: 10%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: row;
//     gap: 1rem;
//     margin-top: 10px;
//     white-space: nowrap;
//   }
//   .or{
//     font-size: 1rem;
//   }
//   a:first-child{
//     text-decoration: underline;
//     font-size: .8rem;
//     font-size: 1rem;
//   }
//   Button{
//     font-size: 1rem;
//     >svg{
//         height: 20px;
//         margin-top: 2px;
//       }
//   }
//   @media(max-width: 1563px) {
//     .frame{
//       margin-left: 6rem;
//     }
//     .wrapper-right >span{
//       display: flex;
//       margin-bottom: 10px;
//     }
//     /* .wrapper-right p{
//       word-spacing: 2px;
//     } */
//   }
//   @media(max-width: 1200px) {
//     .frame{
//       margin-left: 3rem;
//       margin-right: -2.5rem;
//       height: 60%;
//       padding-bottom: 0px;
//     } 
//     .frame img{
//       height: 100%;
//     } 
//     .wrapper-right div{
//       width: 100%;
//     }
//     p, a:first-child, .or, Button {
//       font-size: .8rem;
//     }
//   }
//   @media(max-width: 1000px) {
//     >div{
//       display: flex;
//       align-items: center;
//       width: 80%;
//       height: 60%;
//     }
//     .wrapper-left{
//       width: 50%;
//       height: 50%;
//     }
//     .frame{
//       margin-left: -30px;
//       margin-top: 0;
//       padding-bottom: 0px;
//       width: 100%;
//       height: 100%;
//       border: 10px solid var(--primary); 
//       background-color: var(--primary); 
//     } 
//     .frame img{
//       width: 100%;
//       margin-top: 0px;
//       margin-bottom: calc(75% - 20px);
//       margin-left: calc(0% - 0px);
//     }
//     .wrapper-right{
//       display: flex;
//       align-items: center;
//       width: 40%;
//       height: 70%;
//       margin-right: 35px; 
//       margin-top: 3rem; 
//     }
//     .wrapper-right h2{
//       font-size: 1.25rem;
//       margin-top: .5rem;
//     }
//     .wrapper-right div{
//       width: 95%;
//     }
//     .wrapper-right p{
//       font-size: 1rem;
//     }
//     .wrapper-right >span{
//       margin-top: 30px;
//     }
//   }
//   @media(max-width: 930px) {
//     >div{
//       width: 95%;
//       gap: .1rem;
//       display: flex;
//       flex-direction: column;
//       height: 80vh;
//       width: 80%;
//     }
//     .frame{
//       padding-bottom: 0px;
//     }
//     .wrapper-right {
//       width: 100%;
//       justify-content: center;
//       margin: 0 4rem;
//     }
//     .wrapper-right >h2{
//       margin-top:  0px;
//       margin-bottom:  -10px;
//     }
//     .wrapper-right >div{  
//       margin-top:  10px;
//       margin-bottom: -20px;
//     }
//     .wrapper-right p{
//       font-size: 1.25rem;
//     }
//     .wrapper-right >span{
//       margin-bottom: 10px;
//     }
//   }
//   @media(max-width: 600px) {
//     >div{
//       height: 85vh;
//     }
//     .wrapper-right p{
//       font-size: 1rem;
//     }
//   }
//   @media(max-width: 480px) {
//     >div{
//       width: 95%;
//       height: 95vh;
//     }
//     .wrapper-left{
//       align-items: start;
//       height: 50%;
//     }
//     .frame{
//       margin-top: -1px;
//       padding-bottom: 22px;
//       width: 100%;
//       height: 100%;
//       border: 10px solid var(--primary); 
//       background-color: var(--primary); 
//     } 
//     .frame img{
//       width: 100%;
//       height: 106%;
//       margin-top: 0px;
//       margin-bottom: calc(75% - 27px);
//       margin-left: calc(0% - 0px);
//     }
//     .wrapper-right{
//       margin-bottom: 50px;
//       margin-top: 10px;
//       display: flex;
//       justify-content: center;
//     }
//     .wrapper-right >div{
//       width: 90%;
//       margin: 15px; 
//     }
//     .wrapper-right p{
//       font-size: .8rem;
//     }
//     .wrapper-right >span{
//       margin-top: 0;
//     }
//     Button{
//       margin-bottom: 10px;
//     }
//   }
// `;



// /* 320px - 480px = mobile */
// /* Em mobile first não precisa de MQ */
// h5 {
//   color: aqua;
// }

// /* 480px - 768px = tablet */
// @media (min-width: 480px) {
//   h5 {
//     color: burlywood;
//   }
// }

// /* 768px - 1024px = telas menores, laptops */
// @media (min-width: 768px) {
//   h5 {
//     color: cadetblue;
//   }
// }

// /* 1024px - 1200px = desktop */
// @media (min-width: 1024px) {
//   h5 {
//     color: coral;
//   }
// }

// /* 1200 e + = telas maiores, tvs */
// @media (min-width: 1200px) {
//   h5 {
//     color: darkorchid;
//   }
// }