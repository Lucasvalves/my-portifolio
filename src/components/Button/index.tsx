import { ReactNode } from 'react';
import { Container } from './styles';

type Props = {
  type?: string;
  disabled?: boolean;
  children?: string | string[] | JSX.Element | JSX.Element[] | ReactNode;
};
export const Button = ({ children }: Props) => {
  return (
    <Container>
      <button>{children}</button>
    </Container>
  );
}
