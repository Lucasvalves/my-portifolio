import { Container } from './styles';
import gitHub from '../../assets/gitHub.svg';
import linkedln from '../../assets/linkedln.svg';

export function Footer() {
  return (
    <Container>
      <span>
        <a href="https://www.linkedin.com/in/lucasvelosoalves/" target='blank'>
          <img src={linkedln} alt="linkedin" className="icon"/>
        </a>
        <a href="https://github.com/Lucasvalves" target='blank'> 
          <img src={gitHub} alt="gitHub" className="icon"/>
        </a>
      </span>
      <p>© LUCAS VELOSO. ALL RIGHTS RESERVED.</p>
    </Container>
  )
}