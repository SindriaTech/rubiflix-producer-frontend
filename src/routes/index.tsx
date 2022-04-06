import React from 'react';
import { BrowserRouter, Routes as DOMRoutes, Route } from 'react-router-dom';

import { SignIn } from '../pages';

export const routes: React.FC = () => (
  <BrowserRouter>
    <DOMRoutes>
      <Route path="/sign-in" element={<SignIn />} />
    </DOMRoutes>
  </BrowserRouter>
);
