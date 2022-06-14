import React from 'react';

import * as S from './styles';

interface ModalContainerProps {
  title: string;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  title,
  children
}) => (
  <S.Container>
    <h4>{title}</h4>
    <div>{children}</div>
  </S.Container>
);
