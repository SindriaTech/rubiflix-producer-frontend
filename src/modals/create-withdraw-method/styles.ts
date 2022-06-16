import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 32px;

  button {
    width: 100%;
    height: 64px;

    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 16px;

    padding-left: 24px;

    border: 2px solid ${({ theme }) => theme.color.primary_lighten_2};

    background: transparent;

    transition: all 0.4s;

    h6,
    span {
      color: ${({ theme }) => theme.color.text};
    }

    &.selected {
      background: ${({ theme }) => theme.color.purple};
      border-width: 0;

      h6,
      span {
        color: ${({ theme }) => theme.color.white};
      }
    }
  }
`;

export const TEDInputs = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 24px;

  > .bank-informations {
    display: grid;
    grid-template-columns: 1fr 1fr;

    row-gap: 24px;
    column-gap: 32px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;

  border-radius: 4px;

  background: ${({ theme }) => theme.color.primary_lighten};
`;
