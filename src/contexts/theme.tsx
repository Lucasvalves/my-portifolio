import { createContext, ReactNode, useState } from 'react';

export type Themes = 'dark' | 'light';

type ThemeContextData = {
  currentTheme: Themes;
  toggleSwitch: () => any;
};
type ThemeContextProps = {
  children: ReactNode;
};
export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData,
);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState<Themes>('dark');

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
