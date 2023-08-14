import { createContext } from 'react';

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
};

export const AppContext = createContext<ITypes>(initalvalue);
