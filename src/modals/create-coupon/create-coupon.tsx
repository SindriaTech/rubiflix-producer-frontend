import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { Button, Input, ModalBackground, ModalContainer } from '../../atoms';
import { useModal } from '../../providers';

import * as S from './styles';

export const CreateCoupon: React.FC = () => {
  const { modals, toggleModal } = useModal();
  const form = useForm();
  const { color } = useTheme();

  const handleClose = () => {
    toggleModal({
      createCoupon: {
        isOpen: false
      }
    });
  };

  if (!modals?.createCoupon?.isOpen) {
    return <div />;
  }

  return (
    <ModalBackground onClickClose={handleClose}>
      <FormProvider {...form}>
        <ModalContainer title="Criar Cupon">
          <S.Container>
            <div className="inputs">
              <Input
                id="name"
                name="name"
                label="Nome"
                placeholder="nome"
                controller={{}}
              />
              <Input
                id="code"
                name="code"
                label="Código"
                placeholder="Código"
                controller={{}}
              />
              <Input
                id="percent"
                name="percent"
                label="Porcentagem de desconto"
                placeholder="xx%"
                controller={{}}
              />
              <Input
                id="expiration"
                name="expiration"
                label="Expiraçao"
                placeholder="00/00/0000"
                controller={{}}
              />
            </div>
            <div className="buttons">
              <Button background={color.green}>
                <h6>Criar</h6>
              </Button>
            </div>
          </S.Container>
        </ModalContainer>
      </FormProvider>
    </ModalBackground>
  );
};
