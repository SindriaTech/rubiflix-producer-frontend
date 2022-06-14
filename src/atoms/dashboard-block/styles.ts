import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.color.primary_light};

  border: 1px solid ${({ theme }) => theme.color.primary_lighten};

  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);

  border-radius: 16px;
`;

export const Header = styled.div`
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
`;

export const Content = styled.div``;
