import styled from 'styled-components';

export const Container = styled.div`
  > div {
    width: 100%;

    padding: 24px 32px 0 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 48px;

    button {
      width: 160px;
      height: 48px;

      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${({ theme }) => theme.color.green};

      span {
        color: ${({ theme }) => theme.color.white};

        margin-right: 16px;
      }

      p {
        font-family: 'Monda', sans-serif;
        color: ${({ theme }) => theme.color.white};
      }
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      border-bottom: 2px solid ${({ theme }) => theme.color.primary_lighten};

      tr {
        td {
          padding: 16px 0;

          strong {
            font-size: 16px;
          }
        }
      }
    }

    tbody {
      tr {
        border-bottom: 2px solid ${({ theme }) => theme.color.primary_lighten};
        background: ${({ theme }) => theme.color.primary};

        td {
          padding: 24px 0;
        }

        &:last-child {
          border-bottom: 0;

          td {
            border-radius: 0 0 24px 24px;
          }
        }
      }
    }

    thead,
    tbody {
      tr {
        td {
          &:first-child {
            padding-left: 40px;
          }
        }
      }
    }
  }
`;

export const Action = styled.button`
  width: 32px;
  height: 32px;

  border-radius: 50%;

  background: ${({ theme }) => theme.color.primary_lighten};

  span {
    font-size: 16px;

    color: ${({ theme }) => theme.color.text};
  }

  & + & {
    margin-left: 16px;
  }
`;
