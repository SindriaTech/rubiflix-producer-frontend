import styled from 'styled-components';

export const Container = styled.div`
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

          &:first-child {
            border-radius: 0 0 0 16px;
          }

          &:last-child {
            border-radius: 0 0 16px 0;
          }
        }

        &:last-child {
          border-bottom: 0;

          td {
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
