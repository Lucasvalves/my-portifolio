import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
import useAppContext from '../../hook/useAppContext';
import { Link } from 'react-scroll';

function MenuMobile() {
  const { menuIsVisible, setMenuIsVisible } = useAppContext();

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuIsVisible(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuIsVisible(false)}
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuIsVisible(false)}
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuIsVisible(false)}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuIsVisible(false)}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export { MenuMobile };
