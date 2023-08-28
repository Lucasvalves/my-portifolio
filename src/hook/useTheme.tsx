import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
export type Themes = 'dark' | 'light';

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw Error('useTheme must be used within an ThemeProvider');
  }
  return context;
}
