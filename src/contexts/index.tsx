import { ThemeProvider } from './theme';
import { MainProvider } from './MainProvider';
import { ReactNode } from 'react';
type AppContextProps = {
  children: ReactNode;
};
const AppProvider = ({ children }: AppContextProps) => {
  return (
    <MainProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </MainProvider>
  );
};

export default AppProvider;
