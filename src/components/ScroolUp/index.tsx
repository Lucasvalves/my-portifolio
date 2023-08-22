import { Container } from './styles';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Link } from 'react-scroll';
import useAppContext from '../../hook/useAppContext';
import { useEffect } from 'react';

export const ScroolBar = () => {
  const { isScrolled, setIsScrolled } = useAppContext();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsScrolled]);

  const arrowUpClassName = `arrow-on ${isScrolled ? 'arrow-off' : ''}`;
  return (
    <Link to="main" spy={true} smooth={true} offset={-70} duration={500}>
      <Container>
        <button className={arrowUpClassName}>
          <AiOutlineArrowUp />
        </button>
      </Container>
    </Link>
  );
}
