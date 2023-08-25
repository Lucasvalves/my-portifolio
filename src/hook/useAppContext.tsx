import { useContext } from 'react';
import { MainContext } from '../contexts/MainContext';

export default function useMainProviderContext() {
  const context = useContext(MainContext);

  if (context === undefined) {
    throw new Error('Não está dentro do contexto');
  }

  return context;
}
