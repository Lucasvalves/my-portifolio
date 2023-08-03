import { Container } from './styles';
import { Link } from 'react-scroll';
import useAppContext from '../../hook/useAppContext';

export function Nav() {
  const { setOpenMenu } = useAppContext();

  return (
    <Container>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setOpenMenu(false)}
          >Home
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
          >Sobre mim
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
            >Habilidades
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
          >Projetos
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
          >Contato
        </Link>
        </li>
      </ul>
    </Container>
  )
}


