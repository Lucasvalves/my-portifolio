import { Container } from './styles';
import logoImg from '../../assets/logo.png';
import { RiMenu3Fill } from 'react-icons/ri';
import useAppContext from '../../hook/useAppContext';
import useTheme from '../../hook/useTheme';
import { Nav } from '../Nav/index';
import { Link } from 'react-scroll';
import Switch from 'react-switch';

export const Header = () => {
  const { setMenuIsVisible } = useAppContext();
  const { setOpenMenu } = useAppContext();
  const { toggleSwitch, currentTheme } = useTheme();

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
      </section>
    </Container>
  );
};
