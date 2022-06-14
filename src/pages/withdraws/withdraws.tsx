import React from 'react';
import { useTheme } from 'styled-components';
import { DashboardBlock } from '../../atoms';
import { Table } from '../../molecules';
import { GridContainer } from '../../styles';

import * as S from './styles';

export const Withdraws: React.FC = () => {
  const { color } = useTheme();

  return (
    <S.Container>
      <GridContainer>
        <S.CashSection>
          <DashboardBlock>
            <S.CashBlock>
              <div>
                <S.CashIcon background={color.green}>
                  <span className="material-icons-round">&#xe227;</span>
                </S.CashIcon>
                <strong>Disponível</strong>
              </div>
              <h5>R$ 3234,32</h5>
            </S.CashBlock>
          </DashboardBlock>
          <DashboardBlock>
            <S.CashBlock>
              <div>
                <S.CashIcon background={color.red}>
                  <span className="material-icons-round">&#xf038;</span>
                </S.CashIcon>
                <strong>Bloqueado</strong>
              </div>
              <h5>R$ 3234,32</h5>
            </S.CashBlock>
          </DashboardBlock>
          <DashboardBlock>
            <S.CashBlock>
              <div>
                <S.CashIcon background={color.yellow}>
                  <span className="material-icons-round">&#xe53e;</span>
                </S.CashIcon>
                <strong>Pendente</strong>
              </div>
              <h5>R$ 3234,32</h5>
            </S.CashBlock>
          </DashboardBlock>
          <DashboardBlock>
            <S.CashBlock>
              <div>
                <S.CashIcon background={color.purple}>
                  <span className="material-icons-round">&#xe84f;</span>
                </S.CashIcon>
                <strong>Total</strong>
              </div>
              <h5>R$ 3234,32</h5>
            </S.CashBlock>
          </DashboardBlock>
        </S.CashSection>

        <DashboardBlock
          header={{
            title: 'Seus meios de saque',
            button: {
              text: 'Novo meio'
            }
          }}
          className="withdraws_options"
        >
          <S.WithdrawOptions>
            <S.Option>
              <div>
                <h6>Pix</h6>
                <span className="material-icons-round">&#xe3c9;</span>
              </div>
              <p>gabrielespiza@gmail.com</p>
            </S.Option>
            <S.Option>
              <div>
                <h6>Pix</h6>
                <span className="material-icons-round">&#xe3c9;</span>
              </div>
              <p>gabrielespiza@gmail.com</p>
            </S.Option>
            <S.Option>
              <div>
                <h6>Pix</h6>
                <span className="material-icons-round">&#xe3c9;</span>
              </div>
              <p>gabrielespiza@gmail.com</p>
            </S.Option>
            <S.Option>
              <div>
                <h6>Pix</h6>
                <span className="material-icons-round">&#xe3c9;</span>
              </div>
              <p>gabrielespiza@gmail.com</p>
            </S.Option>
          </S.WithdrawOptions>
        </DashboardBlock>

        <DashboardBlock
          header={{
            title: 'Seus saques',
            button: {
              text: 'Novo saque'
            }
          }}
          className="withdraws_block"
        >
          <Table
            table={{
              head: [
                {
                  name: 'id',
                  label: 'ID'
                },
                {
                  name: 'date',
                  label: 'DATA'
                },
                {
                  name: 'price',
                  label: 'VALOR'
                },
                {
                  name: 'type',
                  label: 'MEIO'
                },
                {
                  label: 'STATUS',
                  name: 'status'
                }
              ],
              body: {
                rows: [
                  {
                    values: {
                      id: '2HJS73',
                      name: '02/05/2022',
                      price: 'R$ 7000',
                      coupon: 'TED',
                      created_at: 'Completo'
                    }
                  },
                  {
                    values: {
                      id: '2HJS73',
                      name: '02/05/2022',
                      price: 'R$ 7000',
                      coupon: 'TED',
                      created_at: 'Completo'
                    }
                  },
                  {
                    values: {
                      id: '2HJS73',
                      name: '02/05/2022',
                      price: 'R$ 7000',
                      coupon: 'TED',
                      created_at: 'Completo'
                    }
                  },
                  {
                    values: {
                      id: '2HJS73',
                      name: '02/05/2022',
                      price: 'R$ 7000',
                      coupon: 'TED',
                      created_at: 'Completo'
                    }
                  },
                  {
                    values: {
                      id: '2HJS73',
                      name: '02/05/2022',
                      price: 'R$ 7000',
                      coupon: 'TED',
                      created_at: 'Completo'
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
