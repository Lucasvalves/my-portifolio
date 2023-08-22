import { Container } from './styles';
import myPhoto from '../../assets/my_photo.png';
import { PiArrowLineDownLight } from 'react-icons/pi';
import { Button } from '../Button';
import { motion } from 'framer-motion';

export function About() {
  return (
    <Container id="about">
      <div className="grid-layout">
        <div>
          <div className="wrapper-left">
            <motion.span
              className="frame"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img src={myPhoto} alt="Logo" />
            </motion.span>
          </div>
          <div className="wrapper-right">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Sobre Mim
            </motion.h2>
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                Sou Desenvolvedor Web Full-Stack em busca da minha primeira
                oportunidade na area.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                Sou formado em Técnico em Desenvolvimento de Sistemas pelo SENAI
                e estou cursando Bacharelado em Sistemas de Informação na
                UNIFACS. Atualmente continuo aprimorando minhas habilidades no
                desenvolvimento de projetos, colocando-os em prática, com
                aprendizado contínuo.
              </motion.p>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
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
            </motion.span>
          </div>
        </div>
      </div>
    </Container>
  );
}
