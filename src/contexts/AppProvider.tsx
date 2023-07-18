import { ReactNode, useState } from 'react'
import { AppContext } from './AppContext'

type AppContextProps={
  children:ReactNode;
}
export default function AppProvider({ children }:AppContextProps) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <AppContext.Provider value={{ 
      menuIsVisible, 
      setMenuIsVisible,
      openMenu, 
      setOpenMenu
    }}>
      {children}
    </AppContext.Provider>
  )
}
