import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { createMask, AnyMaskedOptions } from 'imask';

import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  name: string;
  controller: Omit<UseControllerProps, 'name' | 'control'>;
  masks?: AnyMaskedOptions;
}

export const Input: React.FC<Props> = ({
  label,
  className,
  name,
  controller,
  masks,
  ...rest
}) => {
  const { field, fieldState } = useController({
    name,
    ...controller
  });

  const customOnChangeForMask = (event: ChangeEvent<HTMLInputElement>) => {
    if (!masks) return {};

    const mask = createMask({
      ...masks
    });

    const newEvent = event;

    newEvent.target.value = mask.resolve(String(event.target.value));

    field.onChange(newEvent);

    return newEvent;
  };

  const addOnChangeIfMasksExist = masks
    ? { onChange: customOnChangeForMask }
    : {};

  return (
    <S.Container className={className}>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <input type="text" {...field} {...rest} {...addOnChangeIfMasksExist} />
      {fieldState.error?.message && <span>{fieldState.error?.message}</span>}
    </S.Container>
  );
};
