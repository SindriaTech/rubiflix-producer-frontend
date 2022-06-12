import React from 'react';

import { StylesProvider } from './styles';
import { ToastProvider } from './toast';

export const Providers: React.FC = ({ children }) => (
  <StylesProvider>
    <ToastProvider>{children}</ToastProvider>
  </StylesProvider>
);
