import { createContext } from 'react';

export type Themes = 'dark' | 'light';

type ThemeContextData = {
  currentTheme: Themes;
  toggleSwitch: () => any;
};

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData,
);
