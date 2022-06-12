import React from 'react';

import * as S from './styles';

interface ToastProps {
  id: string;
  type: 'error' | 'alert' | 'success';
  title: string;
  message: string;
  onDelete?(): void;
}

export const Toast: React.FC<ToastProps> = ({
  title,
  message,
  onDelete,
  ...rest
}) => (
  <S.Container {...rest}>
    {rest.type === 'error' && (
      <span className="material-icons-round">&#xe5c9;</span>
    )}
    {rest.type === 'alert' && (
      <span className="material-icons-round">&#xe8b2;</span>
    )}
    {rest.type === 'success' && (
      <span className="material-icons-round">&#xe86c;</span>
    )}
    <div>
      <strong>{title}</strong>
      <p>{message}</p>
    </div>
    <button type="button" className="close" onClick={onDelete}>
      <span className="material-icons-round">&#xe5cd;</span>
    </button>
  </S.Container>
);
