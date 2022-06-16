import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { Button, Input, ModalBackground, ModalContainer } from '../../atoms';
import { Select } from '../../atoms/select';
import { useModal } from '../../providers';

import * as S from './styles';

export const CreateWithdraw: React.FC = () => {
  const { modals, toggleModal } = useModal();
  const form = useForm();
  const { color } = useTheme();

  const handleClose = () => {
    toggleModal({
      createWithdraw: {
        isOpen: false
      }
    });
  };

  if (!modals?.createWithdraw?.isOpen) {
    return <div />;
  }

  return (
    <ModalBackground onClickClose={handleClose}>
      <ModalContainer title="Solicitar saque">
        <FormProvider {...form}>
          <S.Container>
            <div className="inputs">
              <Select
                label="Meio de saque"
                id="bank"
                name="bank"
                options={[]}
                controller={{}}
                placeholder="Conta do Nubank"
              />
              <Input
                id="value"
                label="Valor"
                name="value"
                controller={{}}
                placeholder="0000,00"
              />
            </div>
            <Button background={color.green}>
              <h6>Solicitar</h6>
            </Button>
          </S.Container>
        </FormProvider>
      </ModalContainer>
    </ModalBackground>
  );
};
