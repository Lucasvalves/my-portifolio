import { Container } from './styles';
import myPhoto from '../../assets/my_photo.jpeg';
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
                Sou Técnico em Desenvolvimento de Sistemas e atualmente curso Bacharelado em Sistemas de Informação. Tenho paixão por tecnologia e estou sempre em busca de aprimorar minhas habilidades técnicas e práticas.
              </motion.p>
              <motion.p
                variants={itemsVariantsEixoX}
                transition= {{

                  duration: 1,
                }}
              >
                No meu dia a dia como desenvolvedor, trabalho com tecnologias como JavaScript, Node.js, React, Next.js e Python. Tenho experiência com consumo de APIs, versionamento com Git, banco de dados e sigo metodologias ágeis com foco em lógica e resolução de problemas.
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
                href="https://drive.google.com/file/d/1c4wa4UYKlneB2jdYw3ncEl5-diP0IW2J/view?usp=sharing"
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
