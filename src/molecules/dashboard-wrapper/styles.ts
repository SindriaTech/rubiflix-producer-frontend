import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template:
    'menu header' 80px
    'menu content' calc(100% - 80px)
    / 198px calc(100% - 198px);

  background: ${({ theme }) => theme.color.primary};

  > aside {
    grid-area: menu;
  }

  > header {
    grid-area: header;

    border-bottom: 2px solid ${({ theme }) => theme.color.primary_lighten};
  }

  > section {
    grid-area: content;
  }
`;

export const Menu = styled.div`
  display: inline-block;

  width: 100%;
  height: 100%;

  border-right: 2px solid ${({ theme }) => theme.color.primary_lighten};

  .logo {
    width: 80px;
    height: 80px;

    border-radius: 50%;

    background: ${({ theme }) => theme.color.primary_lighten};

    margin: 48px auto 0 auto;
  }

  nav {
    margin-top: 104px;

    ul {
      li {
        width: 100%;
        height: 64px;

        position: relative;

        transition: all 0.3s;

        & + li {
          margin-top: 24px;
        }

        a {
          &::before {
            position: absolute;
            top: 50%;
            left: 0;

            transform: translate3d(0, -50%, 0);

            content: '';

            width: 4px;
            height: 32px;

            border-radius: 0 4px 4px 0;

            transition: all 0.3s;

            background: ${({ theme }) => theme.color.primary_lighten};
          }

          text-decoration: none;

          display: flex;
          align-items: center;

          width: 100%;
          height: 100%;

          color: ${({ theme }) => theme.color.text};

          span {
            margin-left: 36px;
          }

          strong {
            margin-left: 16px;

            color: ${({ theme }) => theme.color.text};
          }

          &.match {
            color: ${({ theme }) => theme.color.purple};

            &::before {
              background: ${({ theme }) => theme.color.purple};
            }

            strong {
              color: ${({ theme }) => theme.color.white};
            }

            background: ${({ theme }) => theme.color.primary_lighten};
          }

          &:hover {
            &::before {
              background: ${({ theme }) => theme.color.purple};
            }

            background: ${({ theme }) => theme.color.primary_lighten};
          }
        }
      }
    }
  }
`;
