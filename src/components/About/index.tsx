import { Container } from './styles';
import myPhoto from '../../assets/my_photo.png';
import { PiArrowLineDownLight } from 'react-icons/pi';
import Button from '../Button';

export function About() {
  return (
    <Container id="about">
      <div className='grid-layout'>
        <div>
          <div className="wrapper-left">
            <span className="frame">
              <img src={myPhoto} alt="Logo" />
            </span>
          </div>
          <div className="wrapper-right">
            <h2>Sobre Mim</h2>
            <div>
              <p>
                Sou Desenvolvedor Web Full-Stack em busca da minha primeira
                oportunidade na area.
              </p>
              <p>
                Sou formado em Técnico em Desenvolvimento de Sistemas pelo SENAI
                e estou cursando Bacharelado em Sistemas de Informação na
                UNIFACS. Atualmente continuo aprimorando minhas habilidades no
                desenvolvimento de projetos, colocando-os em prática, com
                aprendizado contínuo.
              </p>
            </div>
            <span>
              <a href="https://wa.me/5571996579989" target="blank">
                Entre em contato
              </a>
              <span className="or">ou</span>
              <a
                href="https://drive.google.com/file/d/1hJrXRqMveoZmqafXYh-RAorq40rPoH4s/view?usp=drive_link"
                target="blank"
              >
                <Button>
                  <PiArrowLineDownLight size={15} />
                  Download CV
                </Button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
