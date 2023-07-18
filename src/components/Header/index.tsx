import { Container } from './styles';
import logoImg from '../../assets/Logo.png';
import { RiMenu3Fill } from 'react-icons/ri';
import useAppContext from '../../hook/useAppContext';
import { Nav } from '../Nav/index';
import { Link } from 'react-scroll';

export function Header() {
  const { setMenuIsVisible } = useAppContext();
  const { setOpenMenu } = useAppContext();
  return (
    <Container >
      <section>
        <span>
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setOpenMenu(false)}
          ><img src={logoImg} alt="Logo"/>
          </Link>
        </span>
        <Nav/>
      </section>
      <section>
        <RiMenu3Fill size={35} onClick={() => setMenuIsVisible(true)} className="mobile"/>
      </section>
    </Container>
  )
}