import { createContext } from 'react'

interface IMenuIsVisible{
  menuIsVisible: boolean;
  setMenuIsVisible: (newState: boolean) => void;
  openMenu: boolean; 
  setOpenMenu: (newState: boolean) => void;
}
const initalvalue = {
  menuIsVisible: false, 
  setMenuIsVisible: () => {true},
  openMenu: false, 
  setOpenMenu: () => {true},
}
export const AppContext = createContext<IMenuIsVisible>(initalvalue);
