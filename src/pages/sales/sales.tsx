import React from 'react';

import { DashboardBlock } from '../../atoms';
import { Table } from '../../molecules';

import { GridContainer } from '../../styles';

import * as S from './styles';

export const Sales: React.FC = () => (
  <S.Container>
    <GridContainer>
      <DashboardBlock
        header={{
          title: 'Suas Vendas'
        }}
        className="sales_block"
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
                label: 'NOME DO PRODUTO'
              },
              {
                name: 'price',
                label: 'VALOR'
              },
              {
                name: 'coupon',
                label: 'CUPOM UTILIZADO'
              },
              {
                label: 'CRIADA EM',
                name: 'created_at'
              }
            ],
            body: {
              rows: [
                {
                  values: {
                    id: '2HJS73',
                    name: 'DESCONTO',
                    price: 'R$ 282',
                    coupon: 'Nenhum',
                    created_at: '01/05/2022'
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
                    coupon: 'Nenhum',
                    created_at: '01/05/2022'
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
                    coupon: 'Nenhum',
                    created_at: '01/05/2022'
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
                    coupon: 'Nenhum',
                    created_at: '01/05/2022'
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
                    coupon: 'Nenhum',
                    created_at: '01/05/2022'
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
