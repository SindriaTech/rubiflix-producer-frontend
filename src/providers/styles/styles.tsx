import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

export const StylesProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
