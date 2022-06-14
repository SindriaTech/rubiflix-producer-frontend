import styled from 'styled-components';

export const Container = styled.label`
  position: relative;

  input {
    position: absolute;
    opacity: 0;
  }

  label {
    cursor: pointer;

    > h6 {
      margin-bottom: 16px;
    }
  }
`;

export const Check = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  div {
    width: 32px;
    height: 32px;

    border-radius: 8px;

    background: ${({ theme }) => theme.color.primary_lighten};

    border: 2px solid ${({ theme }) => theme.color.primary_lighten_2};

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: none;

      font-size: 18px;
    }
  }

  input:checked + div {
    border: 2px solid ${({ theme }) => theme.color.purple};
    background: ${({ theme }) => theme.color.purple_30};

    span {
      display: block;
    }
  }
`;
