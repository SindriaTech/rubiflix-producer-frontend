import React from 'react';
import { Outlet } from 'react-router-dom';

import { DashboardWrapper } from '../../molecules';

export const PrivateRoutes: React.FC = () => (
  <DashboardWrapper>
    <Outlet />
  </DashboardWrapper>
);
