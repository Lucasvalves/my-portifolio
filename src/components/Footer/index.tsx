import { Container } from './styles';

export const Footer = () =>{
  return (
    <Container>
      <p>
        Copyright © {new Date().getFullYear()} <span>Lucas Veloso.</span> Todos os direitos
        reservados.
      </p>
    </Container>
  );
}
