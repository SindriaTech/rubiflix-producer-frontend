import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import {
  Button,
  Input,
  InputFile,
  ModalBackground,
  ModalContainer
} from '../../atoms';
import { useModal } from '../../providers';

import * as S from './styles';

export const CreateContent: React.FC = () => {
  const form = useForm();
  const { color } = useTheme();
  const { modals, toggleModal } = useModal();

  const handleClose = () => {
    toggleModal({
      createContent: {
        isOpen: false
      }
    });
  };

  if (!modals?.createContent?.isOpen) {
    return <div />;
  }

  return (
    <ModalBackground onClickClose={handleClose}>
      <ModalContainer title="Criar conteúdo">
        <FormProvider {...form}>
          <S.Container>
            <Input
              id="name"
              name="name"
              label="Nome"
              placeholder="Nome"
              controller={{}}
            />
            <InputFile id="file" name="file" controller={{}} />
            <Button background={color.green}>
              <h6>Criar</h6>
            </Button>
          </S.Container>
        </FormProvider>
      </ModalContainer>
    </ModalBackground>
  );
};
