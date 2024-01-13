import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
import useAppContext from '../../hook/useAppContext';
import { ItemNavegation } from '../../components/ItemNavegation';
import useTheme from '../../hook/useTheme';
import Switch from 'react-switch';

const MenuMobile = () => {
  const { menuIsVisible, setMenuIsVisible, mobileBg, setMobileBg } =
    useAppContext();
  const { toggleSwitch, currentTheme } = useTheme();
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  if (currentTheme === 'light') {
    setMobileBg(true);
  } else {
    setMobileBg(false);
  }
  return (
    <Container isVisible={menuIsVisible} menuColor={mobileBg}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <ul>
          <ItemNavegation to="hero" onClick={() => setMenuIsVisible(false)}>
            Home
          </ItemNavegation>
          <ItemNavegation to="about" onClick={() => setMenuIsVisible(false)}>
            Sobre Mim
          </ItemNavegation>
          <ItemNavegation to="projects" onClick={() => setMenuIsVisible(false)}>
            Projetos
          </ItemNavegation>
          <ItemNavegation to="skills" onClick={() => setMenuIsVisible(false)}>
            Habilidades
          </ItemNavegation>
          <ItemNavegation to="contact" onClick={() => setMenuIsVisible(false)}>
            Contato
          </ItemNavegation>
          <div className="switch">
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
          </div>
        </ul>
      </nav>
    </Container>
  );
};

export { MenuMobile };
