import React from 'react';
import { BrowserRouter, Routes as DOMRoutes, Route } from 'react-router-dom';
import { routes } from '../constants';

import * as P from '../pages';

import { PrivateRoutes } from './private';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <DOMRoutes>
      <Route path={routes.index} element={<P.SignIn />} />
      <Route path={routes.signIn} element={<P.SignIn />} />
      <Route path={routes.signUp} element={<P.SignUp />} />

      <Route element={<PrivateRoutes />}>
        <Route path={routes.dashboard} element={<P.Dashboard />} />
        <Route path={routes.sales} element={<P.Sales />} />
        <Route path={routes.coupons} element={<P.Coupons />} />
        <Route path={routes.withdraws} element={<P.Withdraws />} />
        <Route path={routes.products} element={<P.Products />} />
        <Route path={routes.contents} element={<P.Contents />} />
      </Route>
    </DOMRoutes>
  </BrowserRouter>
);
