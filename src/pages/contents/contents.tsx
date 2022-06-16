import React from 'react';

import * as S from './styles';

import { DashboardBlock } from '../../atoms';
import { Table } from '../../molecules';
import { GridContainer } from '../../styles';
import { useModal } from '../../providers';

export const Contents: React.FC = () => {
  const { toggleModal } = useModal();

  const handleCreateContent = () => [
    toggleModal({
      createContent: {
        isOpen: true
      }
    })
  ];

  return (
    <S.Container>
      <GridContainer>
        <DashboardBlock
          header={{
            title: 'Seus conteúdos',
            button: {
              text: 'Novo conteúdo',
              onClick: handleCreateContent
            }
          }}
          className="products_block"
        >
          <Table
            table={{
              head: [
                {
                  name: 'name',
                  label: 'NOME'
                },
                {
                  name: 'size',
                  label: 'TAMANHO'
                },
                {
                  name: 'created_at',
                  label: 'CRIADO EM'
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
                      name: 'DESCONTO',
                      price: '200 KB',
                      created_at: '22/11/2004'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  },
                  {
                    values: {
                      name: 'DESCONTO',
                      price: '200 KB',
                      created_at: '22/11/2004'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  },
                  {
                    values: {
                      name: 'DESCONTO',
                      price: '200 KB',
                      created_at: '22/11/2004'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  },
                  {
                    values: {
                      name: 'DESCONTO',
                      price: '200 KB',
                      created_at: '22/11/2004'
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
