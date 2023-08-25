import { createContext } from 'react';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ITypes {
  menuIsVisible: boolean;
  setMenuIsVisible: (newState: boolean) => void;
  openMenu: boolean;
  setOpenMenu: (newState: boolean) => void;
  loading: boolean;
  setLoading: (newState: boolean) => void;
  success: boolean;
  setSuccess: (newState: boolean) => void;
  error: boolean;
  setError: (newState: boolean) => void;
  isScrolled: boolean;
  setIsScrolled: (newState: boolean) => void;
}
const initalvalue = {
  menuIsVisible: false,
  setMenuIsVisible: () => {
    true;
  },
  openMenu: false,
  setOpenMenu: () => {
    true;
  },
  loading: false,
  setLoading: () => {
    true;
  },
  success: false,
  setSuccess: () => {
    true;
  },
  error: false,
  setError: () => {
    true;
  },
  isScrolled: false,
  setIsScrolled: () => {
    true;
  },
  theme: dark,
  setTheme: () => {
    light;
  },
};

export const MainContext = createContext<ITypes>(initalvalue);
