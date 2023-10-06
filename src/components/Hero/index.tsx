import { Container } from './styles';
import TypeIt from 'typeit-react';
import {
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillGithub,
} from 'react-icons/ai';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariantsTitles,
} from '../../utils/constsAnimates';

export const Hero = () => {
  return (
    <Container id="hero">
      <motion.div
        className="grid-layout"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        variants={containerVariants}
      >
        <h1>
          <motion.span
            className="welcome"
            variants={itemVariantsTitles}
            transition={{
              duration: 2,
            }}
          >
            Olá, bem vindo(a)! sou o
          </motion.span>
          <span className="center">
            <span className="name">
              <TypeIt
                options={{
                  strings: ['Lucas Veloso'],
                  speed: 150,
                  waitUntilVisible: true,
                }}
              ></TypeIt>
            </span>
          </span>
        </h1>
        <motion.span
          className="center"
          variants={itemVariantsTitles}
          transition={{
            duration: 2,
          }}
        >
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
        </motion.span>
        <motion.span
          className="center job"
          variants={itemVariantsTitles}
          transition={{
            duration: 2,
          }}
        >
          <div className="line"></div>
          <h2 className="job">Desenvolvedor Full-Stack</h2>
        </motion.span>
      </motion.div>
    </Container>
  );
};
