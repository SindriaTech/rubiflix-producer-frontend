import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

import * as S from './styles';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  text?: string;
  name: string;
  controller: Omit<UseControllerProps, 'name' | 'control'>;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  controller,
  className,
  text,
  ...rest
}) => {
  const { field } = useController({ name, ...controller });

  return (
    <S.Container className={className}>
      <label htmlFor={id}>
        {label && <h6>{label}</h6>}
        <S.Check>
          <input id={id} type="checkbox" {...rest} {...field} />
          <div>
            <span className="material-icons-round">&#xe876;</span>
          </div>
          {text && <h6>{text}</h6>}
        </S.Check>
      </label>
    </S.Container>
  );
};
