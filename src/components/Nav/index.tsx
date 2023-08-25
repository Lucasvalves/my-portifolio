import { Container } from './styles';
import { containerVariantsNav } from '../../utils/constsAnimates';
import { motion } from 'framer-motion';

import { ItemNavegation } from '../../components/ItemNavegation';

export const Nav = () => {
  //const { setOpenMenu } = useAppContext();
  
  return (
    <Container>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={containerVariantsNav}
      >
        <ItemNavegation to="hero">
          Home
        </ItemNavegation>
        <ItemNavegation to="about">Sobre Mim</ItemNavegation>
        <ItemNavegation to="projects">Projetos</ItemNavegation>
        <ItemNavegation to="skills">Habilidades</ItemNavegation>
        <ItemNavegation to="contact">Contato</ItemNavegation>
      </motion.ul>
    </Container>
  );
};
