import projectTaskban from '.././assets/projetcTaskban.png';
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
    image: projectTaskban,
    name: 'Taskban',
    description:
      'Projeto gerenciador de tarefas, onde é possivel criar e arrastar tarefas para listas de acordo com o processo de realização. Feito em React.',
    linkGitHub: 'https://github.com/Lucasvalves/taskban',
    page: 'https://taskban-pink.vercel.app/',
    stack: 'frontend',
  },
  {
    image: '',
    name: 'Better Health',
    description:
      'O projeto tem como objetivo fazer a gerência de usuários, médicos e pacientes de clinicas de saúde, realizando agendamentos de consultas. Feito em NodeJS, TypeScript, React.',
    linkGitHub: 'https://github.com/Lucasvalves/better_health',
    page: '',
    stack: 'backend',
  },
  {
    image: projectRide,
    name: 'App Ride',
    description:
      'O aplicativo mede a velocidade de uma atividade como corrida de bicicleta, registrando  dados como  distância percorrida, tempo e localização. Feito Java Script.',
    linkGitHub: 'https://github.com/Lucasvalves/app_ride',
    page: 'https://lucasvalves.github.io/app_ride/',
    stack: 'frontend',
  },
  {
    image: '',
    name: 'SysCopa',
    description:
      'Projeto realiza o inserção, seleção, atualização e deleção de dados existentes uma Copa do Mundo como nome de seleções, árbitros, técnicos e fases. Feito em Mysql, Python.',
    linkGitHub: 'https://github.com/Lucasvalves/sys_copa',
    page: '',
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
