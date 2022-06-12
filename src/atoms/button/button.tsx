import React from 'react';

import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
  children: any;
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <S.Container {...(rest as any)}>{children}</S.Container>
);
