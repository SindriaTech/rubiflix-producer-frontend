import React from 'react';

import { CreateCoupon } from './create-coupon';
import { CreateProduct } from './create-product';
import { CreateWithdrawMethod } from './create-withdraw-method';
import { CreateWithdraw } from './create-withdraw';
import { CreateContent } from './create-content';

export const Modals: React.FC = () => (
  <>
    <CreateCoupon />
    <CreateProduct />
    <CreateWithdrawMethod />
    <CreateWithdraw />
    <CreateContent />
  </>
);
