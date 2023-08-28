import { ThemeProvider } from 'styled-components';
import React from 'react';
import useTheme from '../hook/useTheme';
import theme from '../styles/global';

type Props = {
  children: React.ReactNode;
};

export function Theme({ children }: Props) {
  const { currentTheme } = useTheme();

  return <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>;
}
