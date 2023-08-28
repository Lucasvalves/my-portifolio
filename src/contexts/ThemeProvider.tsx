import { ReactNode } from 'react';
import usePersistedState from '../hook/usePersistedState';
import { ThemeContext } from '../contexts/ThemeContext';

type ThemeContextProps = {
  children: ReactNode;
};
export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = usePersistedState('theme', 'dark');

  const toggleSwitch = () => {
    if (theme === 'light') {
      setTheme('dark');
      return;
    }

    if (theme === 'dark') {
      setTheme('light');
      return;
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        toggleSwitch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
