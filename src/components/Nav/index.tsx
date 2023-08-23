import { Container } from './styles';
import { containerVariantsNav } from '../../utils/constsAnimates';
import { motion } from 'framer-motion';

import { ItemNav } from '../../components/ItemNav';

export const Nav = () => {
  //const { setOpenMenu } = useAppContext();
  
  return (
    <Container>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={containerVariantsNav}
      >
        <ItemNav to="hero">
          Home
        </ItemNav>
        <ItemNav to="about">Sobre Mim</ItemNav>
        <ItemNav to="projects">Projetos</ItemNav>
        <ItemNav to="skills">Habilidades</ItemNav>
        <ItemNav to="contact">Contato</ItemNav>
      </motion.ul>
    </Container>
  );
};
