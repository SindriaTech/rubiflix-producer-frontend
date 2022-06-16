import styled from 'styled-components';

export const Container = styled.div`
  display: block;

  .withdraws_options,
  .withdraws_block {
    margin-top: 40px;
  }
`;

export const CashSection = styled.div`
  margin-top: 172px;

  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 32px;
`;

export const CashBlock = styled.div`
  width: 100%;
  height: 175px;

  padding: 24px;

  > div {
    display: flex;
    align-items: center;

    gap: 24px;
  }

  h5 {
    margin-top: 32px;
  }
`;

interface CashIconProps {
  background: string;
}

export const CashIcon = styled.div<CashIconProps>`
  width: 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({ background }) => background};

  span {
    font-size: 32px;

    color: ${({ theme }) => theme.color.primary};
  }
`;

export const WithdrawOptions = styled.div`
  padding: 0 24px 24px 24px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 32px;
`;

export const Option = styled.div`
  width: 100%;
  height: 101px;

  padding: 16px;

  border-radius: 8px;

  background: ${({ theme }) => theme.color.primary_lighten};

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    span {
      font-size: 16px;

      color: ${({ theme }) => theme.color.text};

      cursor: pointer;
    }
  }

  p {
    margin-top: 16px;
  }
`;
