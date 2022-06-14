import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  z-index: 1;

  .grid {
    position: relative;
    z-index: 2;

    h4 {
      margin-top: 40px;
    }

    .analytics {
      margin-top: 80px;

      padding: 32px 40px 40px 40px;
    }

    .coupons {
      margin-top: 32px;
    }
  }
`;

export const QuickInformations = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;

    display: flex;
    align-items: center;

    span {
      color: ${({ theme }) => theme.color.text};
    }

    .calendar {
      margin-right: 16px;
    }

    p {
      font-weight: 500;
    }
  }
`;

export const SmallAnalytics = styled.div`
  margin-top: 48px;

  display: flex;
  justify-content: space-between;

  ul {
    display: flex;

    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      padding-right: 48px;

      border-right: 2px solid ${({ theme }) => theme.color.primary_lighten};

      & + li {
        margin-left: 48px;
      }

      &:last-child {
        border: none;

        padding: 0;
      }

      .big_number {
        font-size: 48px;
        font-weight: 700;
        line-height: 130%;

        background: ${({ theme }) => theme.gradient.gradient_orange};

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;

        margin-top: 24px;
      }

      .small_number {
        margin-top: 8px;
      }

      &.sales {
        .big_number {
          background: ${({ theme }) => theme.gradient.gradient_purple};

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
    }

    &.charts {
      li {
        align-items: center;
      }
    }
  }
`;
