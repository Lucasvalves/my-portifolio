import { Container } from './styles';
import { containerVariants } from '../../utils/constants';
import { motion } from 'framer-motion';

import { ItemNav } from '../../components/ItemNav';

export const Nav = () => {
  //const { setOpenMenu } = useAppContext();
  
  return (
    <Container>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={containerVariants}
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
