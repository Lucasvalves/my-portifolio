import { Container } from './styles';
import whatsapp from '../../assets/whatsapp.svg';
import linkedln from '../../assets/linkedln.svg';
import gitHub from '../../assets/gitHub.svg';
import TypeIt from 'typeit-react';

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
            <img src={whatsapp} alt="whatsapp" className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucasvelosoalves/"
            target="blank"
          >
            <img src={linkedln} alt="linkedin" className="icon" />
          </a>
          <a href="https://github.com/Lucasvalves" target="blank">
            <img src={gitHub} alt="gitHub" className="icon" />
          </a>
        </span>
        <span className="center job">
          <div className="line"></div>
          <h2 className="job">Desenvolvedor Full-Stack</h2>
        </span>
      </div>
    </Container>
  );
}
