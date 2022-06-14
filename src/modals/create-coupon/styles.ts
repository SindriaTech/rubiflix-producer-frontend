import styled from 'styled-components';

export const Container = styled.div`
  .inputs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    align-items: center;

    gap: 24px;
  }

  .buttons {
    margin-top: 32px;

    h6 {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;
