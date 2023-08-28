import { Container } from './styles';
import TypeIt from 'typeit-react';
import {
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillGithub,
} from 'react-icons/ai';

export const Hero = () => {
  return (
    <Container id="hero">
      <div>
        <h1>
          <span className="welcome">Olá, bem vindo(a)! sou o</span>
          <span className="center">
            <span className="name">
              <TypeIt
                options={{
                  strings: ['Lucas Veloso'],
                  speed: 100,
                  waitUntilVisible: true,
                }}
              ></TypeIt>
            </span>
          </span>
        </h1>
        <span className="center">
          <a href="https://wa.me/5571996579989" target="blank">
            <AiOutlineWhatsApp className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucasvelosoalves/"
            target="blank"
          >
            <AiFillLinkedin className="icon" />
          </a>
          <a href="https://github.com/Lucasvalves" target="blank">
            <AiFillGithub className="icon" />
          </a>
        </span>
        <span className="center job">
          <div className="line"></div>
          <h2 className="job">Desenvolvedor Full-Stack</h2>
        </span>
      </div>
    </Container>
  );
};
