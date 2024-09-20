import { Container } from './styles';
import myPhoto from '../../assets/my_photo.png';
import { PiArrowLineDownLight } from 'react-icons/pi';
import { Button } from '../Button';
import { motion } from 'framer-motion';
import {
  itemsVariantsEixoX,
  containerVariants,
} from '../../utils/constsAnimates';

export function About() {
  return (
    <Container id="about">
      <motion.div
        className="grid-layout"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        <div>
          <div className="wrapper-left">
            <motion.span
              className="frame"
              variants={itemsVariantsEixoX}
              transition= {{

                duration: 1,
              }}
            >
              <motion.img src={myPhoto} alt="Logo" />
            </motion.span>
          </div>
          <div
            className="wrapper-right"
          >
            <motion.h2
              variants={itemsVariantsEixoX}
              transition= {{

                duration: 1,
              }}
            >
              Sobre Mim
            </motion.h2>
            <div>
              <motion.p
                variants={itemsVariantsEixoX}
                transition= {{

                  duration: 1,
                }}
              >
                Sou Desenvolvedor Web Full-Stack em busca da minha primeira
                oportunidade na area.
              </motion.p>
              <motion.p
                variants={itemsVariantsEixoX}
                transition= {{

                  duration: 1,
                }}
              >
                Sou formado em Técnico em Desenvolvimento de Sistemas pelo SENAI
                e estou cursando Bacharelado em Sistemas de Informação na
                UNIFACS. Atualmente continuo aprimorando minhas habilidades no
                desenvolvimento de projetos, colocando-os em prática, com
                aprendizado contínuo.
              </motion.p>
            </div>
            <motion.span
              variants={itemsVariantsEixoX}
              transition= {{

                duration: 1,
              }}
            >
              <a href="https://wa.me/5571996579989" target="blank">
                Entre em contato
              </a>
              <span className="or">ou</span>
              <a
                href="https://drive.google.com/file/d/1rgyc01UHwQ7BWC_WC3tdLo61qqAVEJif/view?usp=drive_link"
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
      </motion.div>
    </Container>
  );
}
