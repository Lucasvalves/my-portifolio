import { ReactNode, useState } from 'react';
import { AppContext } from './AppContext';

type AppContextProps = {
  children: ReactNode;
};
export default function AppProvider({ children }: AppContextProps) {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        menuIsVisible,
        setMenuIsVisible,
        openMenu,
        setOpenMenu,
        loading,
        setLoading,
        success,
        setSuccess,
        error,
        setError,
        isScrolled,
        setIsScrolled,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
