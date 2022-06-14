import React, { MouseEvent } from 'react';

import * as S from './styles';

interface ModalBackgroundProps {
  onClickClose(): void;
}

export const ModalBackground: React.FC<ModalBackgroundProps> = ({
  children,
  onClickClose
}) => {
  const onClickContainer = () => {
    onClickClose();
  };

  const onClickOuter = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <S.Container onClick={onClickContainer}>
      <S.Outer onClick={onClickOuter}>{children}</S.Outer>
    </S.Container>
  );
};
