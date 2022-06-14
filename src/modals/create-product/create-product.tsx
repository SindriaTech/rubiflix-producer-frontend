import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { Button, Input, ModalBackground, ModalContainer } from '../../atoms';
import { Checkbox } from '../../atoms/checkbox';
import { Select } from '../../atoms/select';
import { useModal } from '../../providers';

import * as S from './styles';

export const CreateProduct: React.FC = () => {
  const { modals, toggleModal } = useModal();
  const form = useForm();
  const { color } = useTheme();

  const handleClose = () => {
    toggleModal({
      createProduct: {
        isOpen: false
      }
    });
  };

  if (!modals?.createProduct?.isOpen) {
    return <div />;
  }

  return (
    <ModalBackground onClickClose={handleClose}>
      <FormProvider {...form}>
        <ModalContainer title="Criar novo produto">
          <S.Container>
            <div className="inputs">
              <Input
                id="name"
                name="name"
                label="Nome"
                placeholder="Nome do produto"
                controller={{}}
              />
              <Input
                id="price"
                name="price"
                label="Price"
                placeholder="R$ 00,00"
                controller={{}}
              />
              <Input
                id="date"
                name="date"
                label="Lançar em"
                placeholder="00/00/0000 12:00"
                controller={{}}
              />
              <Checkbox
                id="active"
                name="active"
                label="Ativar"
                text="Confirmar"
                controller={{}}
              />
            </div>
            <div className="files">
              <Select
                id="products"
                name="products"
                label="Adicionar conteúdos"
                placeholder="Pesquisar conteúdo"
                options={[]}
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
