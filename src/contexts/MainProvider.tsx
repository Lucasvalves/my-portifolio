import { ReactNode, useState } from 'react';
import { MainContext } from './MainContext';

type MainContextProps = {
  children: ReactNode;
};
export function MainProvider({ children }: MainContextProps) {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileBg, setMobileBg] = useState<boolean>(false);

  return (
    <MainContext.Provider
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
        mobileBg,
        setMobileBg,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
