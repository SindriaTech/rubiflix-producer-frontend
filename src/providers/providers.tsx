import React from 'react';

import { StylesProvider } from './styles';
import { ToastProvider } from './toast';
import { ModalProvider } from './modal';

export const Providers: React.FC = ({ children }) => (
  <StylesProvider>
    <ToastProvider>
      <ModalProvider>{children}</ModalProvider>
    </ToastProvider>
  </StylesProvider>
);

export * from './styles';
export * from './toast';
export * from './modal';
