import React from 'react';

import { DashboardBlock } from '../../atoms';
import { Table } from '../../molecules';
import { useModal } from '../../providers';
import { GridContainer } from '../../styles';

import * as S from './styles';

export const Products: React.FC = () => {
  const { toggleModal } = useModal();

  const handleCreateProduct = () => {
    toggleModal({
      createProduct: {
        isOpen: true
      }
    });
  };

  return (
    <S.Container>
      <GridContainer>
        <DashboardBlock
          header={{
            title: 'Seus Produtos',
            button: {
              text: 'Novo produto',
              onClick: handleCreateProduct
            }
          }}
          className="products_block"
        >
          <Table
            table={{
              head: [
                {
                  name: 'id',
                  label: 'ID'
                },
                {
                  name: 'name',
                  label: 'NOME'
                },
                {
                  name: 'price',
                  label: 'VALOR'
                },
                {
                  name: 'status',
                  label: 'STATUS'
                },
                {
                  name: 'actions',
                  label: 'AÇÕES'
                }
              ],
              body: {
                rows: [
                  {
                    values: {
                      id: '2HJS73',
                      name: 'DESCONTO',
                      price: 'R$ 282',
                      status: 'Ativo'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  },
                  {
                    values: {
                      id: '2HJS73',
                      name: 'DESCONTO',
                      price: 'R$ 282',
                      status: 'Ativo'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  },
                  {
                    values: {
                      id: '2HJS73',
                      name: 'DESCONTO',
                      price: 'R$ 282',
                      status: 'Ativo'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  },
                  {
                    values: {
                      id: '2HJS73',
                      name: 'DESCONTO',
                      price: 'R$ 282',
                      status: 'Ativo'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  }
                ]
              }
            }}
          />
        </DashboardBlock>
      </GridContainer>
    </S.Container>
  );
};
