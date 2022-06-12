import React, { ChangeEvent, useState } from 'react';
import {
  useController,
  UseControllerProps,
  useFormContext
} from 'react-hook-form';

import * as S from './styles';

interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  controller: Omit<UseControllerProps, 'name' | 'control'>;
  model?: 'default' | 'profile';
  formData?: FormData;
}

function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

interface Image {
  name: string;
  size: string;
  src: string;
}

export const InputFile: React.FC<InputFileProps> = ({
  id,
  label,
  className,
  name,
  controller,
  model = 'default',
  formData,
  ...rest
}) => {
  const { resetField } = useFormContext();
  const { field, fieldState } = useController({ name, ...controller });
  const [image, setImage] = useState<Image>({} as Image);

  const convert2base64 = (file: File) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage({
        src: String(reader.result?.toString()),
        name: file.name,
        size: formatBytes(file.size, 0)
      });
    };

    reader.readAsDataURL(file);
  };

  const customOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const eventFiles = event.target.files;

    if (!eventFiles) return;

    if (eventFiles.length > 0) {
      convert2base64(eventFiles[0]);
    }

    formData?.append(name, eventFiles[0]);

    field.onChange(event);
  };

  const handleDelete = () => {
    setImage({} as Image);
    resetField(name);
    formData?.delete(name);
  };

  if (model === 'profile') {
    return (
      <S.Profile image={image.src}>
        {image.src && (
          <button type="button" className="close" onClick={handleDelete}>
            <span className="material-icons-round">&#xe5cd;</span>
          </button>
        )}
        <div className="icon">
          <span className="material-icons-round">&#xe439;</span>
        </div>
        <input
          type="file"
          id={id}
          {...field}
          {...rest}
          onChange={customOnChange}
        />
      </S.Profile>
    );
  }

  return (
    <S.Container>
      {label && id && <label htmlFor={id}>{label}</label>}
      <S.File imageExists={!!image.src}>
        <S.SelectFile imageExists={!!image.src}>
          <input
            type="file"
            id-={id}
            {...field}
            {...rest}
            onChange={customOnChange}
          />
          <div className="icon">
            <span className="material-icons-round">&#xe2c3;</span>
          </div>
          <strong>Clique e arraste</strong>
          <p className="accept-files">PNG, JPG, MP3, GIF</p>
        </S.SelectFile>
        <S.UploadedFile imageExists={!!image.src}>
          <div
            className="image"
            style={{ backgroundImage: `url(${image.src})` }}
          />
          <div className="content">
            <h6>{image.name}</h6>
            <p>{image.size}</p>
          </div>
          <button type="button" onClick={handleDelete}>
            <span className="material-icons-round">&#xe888;</span>
          </button>
        </S.UploadedFile>
      </S.File>
      {fieldState.error?.message && <span>{fieldState.error?.message}</span>}
    </S.Container>
  );
};
