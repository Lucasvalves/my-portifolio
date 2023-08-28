import { Container } from './styles';
import { containerVariantsNav } from '../../utils/constsAnimates';
import { motion } from 'framer-motion';
import { ItemNavegation } from '../../components/ItemNavegation';
import useTheme from '../../hook/useTheme';
import Switch from 'react-switch';

export const Nav = () => {
  //const { setOpenMenu } = useAppContext();
  const { toggleSwitch, currentTheme } = useTheme();

  return (
    <Container>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={containerVariantsNav}
      >
        <ItemNavegation to="hero">Home</ItemNavegation>
        <ItemNavegation to="about">Sobre Mim</ItemNavegation>
        <ItemNavegation to="projects">Projetos</ItemNavegation>
        <ItemNavegation to="skills">Habilidades</ItemNavegation>
        <ItemNavegation to="contact">Contato</ItemNavegation>
          <Switch
            onChange={toggleSwitch}
            checked={currentTheme == 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor="#0D52FF"
            onColor="#0D52FF"
          />
      </motion.ul>
    </Container>
  );
};
