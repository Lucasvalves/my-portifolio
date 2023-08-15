import { Container } from './styles';
import js from '../../assets/js.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import react from '../../assets/react.svg';
import node from '../../assets/node.svg';
import ts from '../../assets/ts.svg';
import python from '../../assets/python.svg';
import mySQL from '../../assets/mysql.svg';
import sqlServer from '../../assets/sqlServer.svg';
import mongoDB from '../../assets/mongoDB.svg';
import git from '../../assets/git.svg';



export function Skills() {
  const skills = [
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
      icon: git,
      name: 'Git',
    },
  ];
  return (
    <Container id="skills">
      <div className="title">
        <h2>Habilidades</h2>
        <p>Aqui estão algumas habilidades que possuo.</p>
      </div>
      <div className="show-skills">
        {skills.map((tech, key) => {
          return(
            <div key={key}>
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          )
        })}
      </div>
    </Container>
  );
}
