import React from 'react';

import * as S from './styles';

import { DashboardBlock } from '../../atoms';
import { Table } from '../../molecules';
import { GridContainer } from '../../styles';
import { useModal } from '../../providers';

export const Coupons: React.FC = () => {
  const { toggleModal } = useModal();

  const createCoupon = () => {
    toggleModal({
      createCoupon: {
        isOpen: true
      }
    });
  };

  return (
    <S.Container>
      <GridContainer>
        <DashboardBlock
          header={{
            title: 'Suas cupons de desconto',
            button: {
              text: 'Criar',
              onClick: createCoupon
            }
          }}
          className="sales_block"
        >
          <Table
            table={{
              head: [
                {
                  name: 'id',
                  label: 'NOME'
                },
                {
                  name: 'name',
                  label: 'CUPOM'
                },
                {
                  name: 'price',
                  label: 'VALOR'
                },
                {
                  name: 'used',
                  label: 'TOTAL DE USO'
                },
                {
                  label: 'CRIADO EM',
                  name: 'created_at'
                },
                {
                  label: 'EXPIRA EM',
                  name: 'expires_at'
                }
              ],
              body: {
                rows: [
                  {
                    values: {
                      id: 'Cupom 04',
                      name: 'DESCONTO',
                      percent: '30%',
                      used: '875 usos',
                      created_at: '01/05/2022',
                      expires_at: '01/06/2022'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  },
                  {
                    values: {
                      id: 'Cupom 04',
                      name: 'DESCONTO',
                      percent: '30%',
                      used: '875 usos',
                      created_at: '01/05/2022',
                      expires_at: '01/06/2022'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  },
                  {
                    values: {
                      id: 'Cupom 04',
                      name: 'DESCONTO',
                      percent: '30%',
                      used: '875 usos',
                      created_at: '01/05/2022',
                      expires_at: '01/06/2022'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  },
                  {
                    values: {
                      id: 'Cupom 04',
                      name: 'DESCONTO',
                      percent: '30%',
                      used: '875 usos',
                      created_at: '01/05/2022',
                      expires_at: '01/06/2022'
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
