import React from 'react';

import { Routes } from './routes';
import { GlobalStyles } from './styles/global';
import { Providers } from './providers';

function App() {
  return (
    <Providers>
      <Routes />
      <GlobalStyles />
    </Providers>
  );
}

export default App;
