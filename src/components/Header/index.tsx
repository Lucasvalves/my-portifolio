import { Container } from './styles';
import logoImg from '../../assets/logo.png';
import { RiMenu3Fill } from 'react-icons/ri';
import useAppContext from '../../hook/useAppContext';
import { Nav } from '../Nav/index';
import { Link } from 'react-scroll';

export const Header = () => {
  const { setMenuIsVisible } = useAppContext();
  const { setOpenMenu } = useAppContext();
  return (
    <Container>
      <section className="wrapper">
        <div>
          <div className="container-menu">
            <Link
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setOpenMenu(false)}
            >
              <img src={logoImg} alt="Logo" />
            </Link>
            <Nav />
          </div>
          <div className="container-menu-mobile">
            <RiMenu3Fill
              size={35}
              onClick={() => setMenuIsVisible(true)}
              className="mobile"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};
