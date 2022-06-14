import React from 'react';

import { DashboardBlock } from '../../atoms';
import { Table } from '../../molecules';
import { GridContainer } from '../../styles';

import * as S from './styles';

export const Products: React.FC = () => (
  <S.Container>
    <GridContainer>
      <DashboardBlock
        header={{
          title: 'Seus Produtos',
          button: {
            text: 'Novo produto'
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
