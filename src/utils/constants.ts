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
import whatsapp from '.././assets/whatsapp.svg';
import email from '.././assets/email.svg';
import location from '.././assets/location.svg';

export const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 1,
    },
  },
};

export const projectsitemVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};
export const itemVariants = {
  initial: { y: 100, opacity: 0 },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,

    transition: {
      delay: 1 * index,
      duration: 1,
    },
  }),
};
export const projects = [
  {
    image: projectRide,
    name: 'App Ride',
    description:
      'O aplicativo mede a velocidade de uma atividade como corrida de bicicleta, registrando  dados como  distância percorrida, tempo e localização. Feito Java Script',
    linkGitHub: 'https://github.com/Lucasvalves/app_ride',
    page: 'https://goo.gl/maps/Cmyke6t7GYNX1uabA',
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
export const contacts = [
  {
    image: whatsapp,
    name: 'WhatsApp',
    description: '+55 71 9-9657-9989',
    link: 'https://wa.me/5571996579989',
  },
  {
    image: email,
    name: 'Email',
    description: 'lucasvelosoalves@outlook.com',
    link: 'mailto:lucasvelosoalves@outlook.com?subject=Olá...',
  },
  {
    image: location,
    name: 'Localização',
    description: 'Lauro de Freitas, BA - BR',
    link: 'https://goo.gl/maps/Cmyke6t7GYNX1uabA',
  },
];
