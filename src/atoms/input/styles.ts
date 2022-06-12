import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  label {
    display: inline-block;

    font-size: 18px;

    margin-bottom: 16px;
  }

  input {
    width: 100%;
    height: 64px;

    background: ${({ theme }) => theme.color.primary_lighten};

    border: 2px solid ${({ theme }) => theme.color.primary_lighten_2};

    border-radius: 4px;

    padding-left: 24px;

    line-height: 100%;

    color: ${({ theme }) => theme.color.white};

    transition: 0.4s;

    &::placeholder {
      color: ${({ theme }) => theme.color.white_50};

      line-height: 100%;
    }

    &:hover,
    &:focus,
    &:not(:placeholder-shown) {
      border-color: ${({ theme }) => theme.color.purple};
    }
  }

  span {
    display: block;

    color: ${({ theme }) => theme.color.red};

    margin-top: 8px;

    font-size: 14px;
  }
`;
