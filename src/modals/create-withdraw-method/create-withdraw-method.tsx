import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { Button, Input, ModalBackground, ModalContainer } from '../../atoms';
import { useModal } from '../../providers';

import * as S from './styles';

export const CreateWithdrawMethod: React.FC = () => {
  const { modals, toggleModal } = useModal();
  const form = useForm();
  const { color } = useTheme();
  const [withdrawMethod, setWithdrawMethod] = useState('pix');

  const handleClose = () => {
    toggleModal({
      createWithdrawMethod: {
        isOpen: false
      }
    });
  };

  if (!modals?.createWithdrawMethod?.isOpen) {
    return <div />;
  }

  return (
    <ModalBackground onClickClose={handleClose}>
      <ModalContainer title="Criar novo meio de saque">
        <FormProvider {...form}>
          <S.Container>
            <S.Options>
              <button
                type="button"
                className={withdrawMethod === 'pix' ? 'selected' : ''}
                onClick={() => setWithdrawMethod('pix')}
              >
                <span className="material-icons-round">&#xeaa3;</span>
                <h6>Pix</h6>
              </button>
              <button
                type="button"
                className={withdrawMethod === 'ted' ? 'selected' : ''}
                onClick={() => setWithdrawMethod('ted')}
              >
                <span className="material-icons-round">&#xe84f;</span>
                <h6>TED</h6>
              </button>
            </S.Options>
            {withdrawMethod === 'pix' && (
              <Input
                id="key"
                name="key"
                label="Sua chave pix"
                placeholder="Chave Pix"
                controller={{}}
              />
            )}
            {withdrawMethod === 'ted' && (
              <S.TEDInputs>
                <Input
                  id="ted-name"
                  name="ted-name"
                  label="Nome"
                  placeholder="Conta X"
                  controller={{}}
                />
                <S.Line />
                <Input
                  id="username"
                  name="username"
                  label="Nome do titular"
                  placeholder="Seu nome"
                  controller={{}}
                />
                <div className="bank-informations">
                  <Input
                    id="agency"
                    name="agency"
                    label="Agência"
                    placeholder="Agência"
                    controller={{}}
                  />
                  <Input
                    id="account"
                    name="account"
                    label="Conta"
                    placeholder="0000000-0"
                    controller={{}}
                  />
                  <Input
                    id="bank"
                    name="bank"
                    label="Instituição"
                    placeholder="000 | Banco X12"
                    controller={{}}
                  />
                  <Input
                    id="document"
                    name="document"
                    label="CPF/CNPJ"
                    placeholder="000.000.000-00"
                    controller={{}}
                  />
                </div>
              </S.TEDInputs>
            )}

            <Button className="button" background={color.green}>
              <h6>Criar</h6>
            </Button>
          </S.Container>
        </FormProvider>
      </ModalContainer>
    </ModalBackground>
  );
};
