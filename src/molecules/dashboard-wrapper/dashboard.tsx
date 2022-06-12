import React from 'react';

import { CustomLink } from '../../atoms';

import { routes } from '../../constants';
import { GridContainer } from '../../styles';

import * as S from './styles';

export const DashboardWrapper: React.FC = ({ children }) => (
  <S.Container>
    <header>
      <S.Header>
        <GridContainer className="grid">
          <div />
          <div>
            <S.Notifications>
              <span className="material-icons-round">&#xe7f4;</span>
            </S.Notifications>
            <S.Profile>
              <div />
              <span className="material-icons-round">&#xe313;</span>
            </S.Profile>
          </div>
        </GridContainer>
      </S.Header>
    </header>
    <aside>
      <S.Menu>
        <div className="logo" />
        <nav>
          <ul>
            <li>
              <CustomLink to={routes.dashboard}>
                <span className="material-icons-round">&#xe871;</span>
                <strong>Home</strong>
              </CustomLink>
            </li>
            <li>
              <CustomLink to={routes.sales}>
                <span className="material-icons-round">&#xe8b0;</span>
                <strong>Vendas</strong>
              </CustomLink>
            </li>
            <li>
              <CustomLink to={routes.coupons}>
                <span className="material-icons-round">&#xe638;</span>
                <strong>Cupons</strong>
              </CustomLink>
            </li>
            <li>
              <CustomLink to={routes.withdraws}>
                <span className="material-icons-round">&#xe227;</span>
                <strong>Saques</strong>
              </CustomLink>
            </li>
            <li>
              <CustomLink to={routes.products}>
                <span className="material-icons-round">&#xe1a1;</span>
                <strong>Produtos</strong>
              </CustomLink>
            </li>
            <li>
              <CustomLink to={routes.contents}>
                <span className="material-icons-round">&#xe574;</span>
                <strong>Conteúdos</strong>
              </CustomLink>
            </li>
          </ul>
        </nav>
      </S.Menu>
    </aside>
    <section>
      <div className="background" />
      <section>{children}</section>
    </section>
  </S.Container>
);
