import React from 'react';
import { PieChart, Pie } from 'recharts';
import { useTheme } from 'styled-components';

import { DashboardBlock } from '../../atoms';
import { Table } from '../../molecules';
import { useModal } from '../../providers';

import { GridContainer } from '../../styles';

import * as S from './styles';

export const Dashboard: React.FC = () => {
  const { toggleModal } = useModal();
  const { color } = useTheme();

  const handleCreateCoupon = () => {
    toggleModal({
      createCoupon: {
        isOpen: true
      }
    });
  };

  const handleCreateProduct = () => {
    toggleModal({
      createProduct: {
        isOpen: true
      }
    });
  };

  return (
    <S.Container>
      <GridContainer className="grid">
        <h4>Bem vindo(a), Gabriele Souza</h4>
        <DashboardBlock className="analytics">
          <S.QuickInformations>
            <strong>Informações rápidas</strong>
            <button type="button">
              <span className="material-icons-round calendar">&#xe742;</span>
              <p>05 Abr, 2022 - 23 Mai 2022</p>
              <span className="material-icons-round calendar">&#xe5c5;</span>
            </button>
          </S.QuickInformations>
          <S.SmallAnalytics>
            <ul className="numbers">
              <li>
                <h5>Acessos</h5>
                <p className="big_number">18k+</p>
                <p className="small_number">18.257</p>
              </li>
              <li>
                <h5>Vendas</h5>
                <p className="big_number">6k+</p>
                <p className="small_number">R$ 6.047 </p>
              </li>
              <li className="sales">
                <h5>Compras</h5>
                <p className="big_number">700+</p>
                <p className="small_number">734</p>
              </li>
            </ul>

            <ul className="charts">
              <li>
                <h5>Margem de idade</h5>
                <PieChart width={112} height={112}>
                  <Pie
                    data={[
                      {
                        value: 30
                      },
                      {
                        value: 50
                      },
                      {
                        value: 20
                      }
                    ]}
                    dataKey="value"
                    fill={color.purple}
                  />
                </PieChart>
              </li>
              <li>
                <h5>Localização</h5>
                <PieChart width={112} height={112}>
                  <Pie
                    data={[
                      {
                        value: 30
                      },
                      {
                        value: 50
                      },
                      {
                        value: 20
                      }
                    ]}
                    dataKey="value"
                    fill={color.purple}
                  />
                </PieChart>
              </li>
            </ul>
          </S.SmallAnalytics>
        </DashboardBlock>
        <DashboardBlock
          header={{
            title: 'Seus cupons de desconto',
            button: {
              text: 'Adicionar',
              onClick: handleCreateCoupon
            }
          }}
          className="coupons"
        >
          <Table
            className="table"
            table={{
              head: [
                {
                  name: 'name',
                  label: 'NOME'
                },
                {
                  name: 'coupon',
                  label: 'CUPOM'
                },
                {
                  name: 'value',
                  label: 'VALOR'
                },
                {
                  name: 'total',
                  label: 'TOTAL DE USO'
                },
                {
                  name: 'created_at',
                  label: 'CRIADO EM'
                },
                {
                  name: 'expires_at',
                  label: 'EXPIRA EM'
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
                      name: 'Vladimir Putin',
                      coupon: 'ILOVEVLADIMIR',
                      price: '15%',
                      total: '92.333',
                      created_at: '12/11/2000',
                      expires_at: '12/11/2023'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  },
                  {
                    values: {
                      name: 'Vladimir Putin',
                      coupon: 'ILOVEVLADIMIR',
                      price: '15%',
                      total: '92.333',
                      created_at: '12/11/2000',
                      expires_at: '12/11/2023'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  },
                  {
                    values: {
                      name: 'Vladimir Putin',
                      coupon: 'ILOVEVLADIMIR',
                      price: '15%',
                      total: '92.333',
                      created_at: '12/11/2000',
                      expires_at: '12/11/2023'
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
        <DashboardBlock
          header={{
            title: 'Seus produtos',
            button: {
              text: 'Adicionar',
              onClick: handleCreateProduct
            }
          }}
          className="coupons"
        >
          <Table
            className="table"
            table={{
              head: [
                {
                  name: 'name',
                  label: 'NOME'
                },
                {
                  name: 'price',
                  label: 'PREÇO'
                },
                {
                  name: 'sales',
                  label: 'TOTAL DE VENDAS'
                },
                {
                  name: 'created_at',
                  label: 'CUPONS UTILIZADOS'
                },
                {
                  name: 'expires_at',
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
                      name: 'Cupom 04',
                      coupon: 'R$ 234',
                      price: '1832',
                      total: '292',
                      created_at: '01/06/2022'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  },
                  {
                    values: {
                      name: 'Cupom 04',
                      coupon: 'R$ 234',
                      price: '1832',
                      total: '292',
                      created_at: '01/06/2022'
                    },
                    actions: {
                      onDelete: () => false,
                      onEdit: () => false
                    }
                  },
                  {
                    values: {
                      name: 'Cupom 04',
                      coupon: 'R$ 234',
                      price: '1832',
                      total: '292',
                      created_at: '01/06/2022'
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
