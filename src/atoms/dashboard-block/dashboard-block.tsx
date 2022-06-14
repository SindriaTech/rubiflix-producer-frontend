import React from 'react';

import * as S from './styles';

interface DashboardBlockProps {
  className?: string;
  header?: {
    title: string;
    button?: {
      text: string;
      onClick?(): void;
    };
  };
  children?: JSX.Element | JSX.Element[];
}

export const DashboardBlock: React.FC<DashboardBlockProps> = ({
  children,
  header,
  ...rest
}) => (
  <S.Container {...(rest as any)}>
    {header && (
      <S.Header>
        <h5>{header.title}</h5>
        {header.button && (
          <button type="button" onClick={header.button.onClick}>
            <span className="material-icons-round calendar">&#xe145;</span>
            <p>{header.button.text}</p>
          </button>
        )}
      </S.Header>
    )}
    <S.Content>{children}</S.Content>
  </S.Container>
);
