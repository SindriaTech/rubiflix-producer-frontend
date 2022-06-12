import React, { SelectHTMLAttributes, useEffect, useState } from 'react';
import {
  useController,
  UseControllerProps,
  useFormContext
} from 'react-hook-form';

import * as S from './styles';

interface Option {
  label: string;
  value: any;
  selected?: boolean;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  options: Option[];
  label?: string;
  name: string;
  controller?: Omit<UseControllerProps, 'name'>;
}

export const Select: React.FC<SelectProps> = ({
  id,
  className,
  label,
  options,
  placeholder,
  name,
  controller,
  ...rest
}) => {
  const { setValue } = useFormContext();
  const { field } = useController({
    name,
    defaultValue: '',
    ...controller
  });

  const [opened, setOpened] = useState(false);

  const handleClickOption = (receivedValue: Option) => {
    setOpened(false);
    setValue(name, receivedValue.value, {
      shouldDirty: true
    });
  };

  const handleClickOpenDropbox = () => {
    if (rest.disabled) return;

    setOpened((prevValue) => !prevValue);
  };

  useEffect(() => {
    const item = options.find(({ selected }) => selected);

    if (item) {
      setValue(name, item.value);
    }
  }, []);

  return (
    <S.Container disabled={!!rest?.disabled} className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <div>
        <S.Select onClick={handleClickOpenDropbox} active={!!field.value}>
          {!field.value && placeholder && (
            <p className="placeholder">{placeholder}</p>
          )}
          {field.value && (
            <p className="value">
              {options.find((item) => item.value === field.value)?.label}
            </p>
          )}
          <S.Arrow selected={opened}>
            <span className="material-icons-round">&#xe5cf;</span>
          </S.Arrow>
        </S.Select>
        {opened && (
          <S.Dropbox>
            <div>
              {options.map(({ value, label: optionLabel }) => (
                <button
                  key={value}
                  className={field.value === value ? 'selected' : ''}
                  onClick={() =>
                    handleClickOption({
                      value,
                      label: optionLabel
                    })
                  }
                  type="button"
                >
                  {optionLabel}
                </button>
              ))}
            </div>
          </S.Dropbox>
        )}
        <select {...rest} {...field}>
          {options.map(({ value, label: optionLabel }) => (
            <option key={value} value={value}>
              {optionLabel}
            </option>
          ))}
        </select>
      </div>
    </S.Container>
  );
};
