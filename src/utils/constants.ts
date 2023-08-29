import projectMemory from '.././assets/Project Memory Game.png';
import projectSalao from '.././assets/Project Grenciador de Salão.png';
import projectRide from '.././assets/Project Ride.png';
import js from '.././assets/js.svg';
import html from '.././assets/html.svg';
import css from '.././assets/css.svg';
import styled_components from '.././assets/styled-components.svg';
import react from '.././assets/react.svg';
import node from '.././assets/node.svg';
import ts from '.././assets/ts.svg';
import python from '.././assets/python.svg';
import mySQL from '.././assets/mysql.svg';
import sqlServer from '.././assets/sqlServer.svg';
import mongoDB from '.././assets/mongoDB.svg';
import git from '.././assets/git.svg';

export const projects = [
  {
    image: projectRide,
    name: 'App Ride',
    description:
      'O aplicativo mede a velocidade de uma atividade como corrida de bicicleta, registrando  dados como  distância percorrida, tempo e localização. Feito Java Script',
    linkGitHub: 'https://github.com/Lucasvalves/app_ride',
    page: 'https://lucasvalves.github.io/app_ride/',
    stack: 'frontend',
  },
  {
    image: projectSalao,
    name: 'Gerenciador de Salão',
    description:
      'O projeto tem como objetivo fazer a gerência de usuários e clientes de salão de beleza, feito em Node JS, TypeScript, React',
    linkGitHub: 'https://github.com/Lucasvalves/sistema-de-agendamento',
    page: 'https://goo.gl/maps/Cmyke6t7GYNX1uabA',
    stack: 'frontend',
  },
  {
    image: projectMemory,
    name: 'Jogo da Memória',
    description: 'Projeto jogo da memoria feito em React',
    linkGitHub: 'https://github.com/Lucasvalves/jogoDaMemoriaReact',
    page: 'https://jogo-da-memoria-react-eight.vercel.app/',
    stack: 'frontend',
  },
  {
    image: '',
    name: 'SysCopa',
    description:
      'Projeto realiza o inserção, seleção, atualização e deleção de dados existentes uma Copa do Mundo como nome de seleções, árbitros, técnicos e fases. Feito em Mysql, Python',
    linkGitHub: 'https://github.com/Lucasvalves/sys_copa',
    page: 'https://goo.gl/maps/Cmyke6t7GYNX1uabA',
    stack: 'backend',
  },
];
export const skills = [
  {
    icon: js,
    name: 'JS',
  },
  {
    icon: html,
    name: 'HTML',
  },
  {
    icon: css,
    name: 'CSS',
  },
  {
    icon: react,
    name: 'React',
  },
  {
    icon: node,
    name: 'Node',
  },
  {
    icon: ts,
    name: 'TS',
  },
  {
    icon: python,
    name: 'Python',
  },
  {
    icon: mySQL,
    name: 'MySQL',
  },
  {
    icon: sqlServer,
    name: 'SQL Server',
  },
  {
    icon: mongoDB,
    name: 'Mongo DB',
  },
  {
    icon: git,
    name: 'Git',
  },
  {
    icon: styled_components,
    name: 'Styled Components',
  },
];
