import React, { createContext, useContext, useMemo, useState } from 'react';

interface Modal {
  isOpen?: boolean;
}

interface Modals {
  [name: string]: Modal;
}

interface Context {
  modals: Modals;
  toggleModal(newData: Modals): void;
}

const ModalContext = createContext<Context>({} as Context);

export const ModalProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Modals>({});

  const toggleModal = (newModals: Modals) => {
    setData((prevData) => ({
      ...prevData,
      ...newModals
    }));
  };

  const value = useMemo(
    () => ({
      modals: data,
      toggleModal
    }),
    [data, toggleModal]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('ModalProvider');
  }

  return context;
};
