import styled, { css } from 'styled-components';

interface ToastProps {
  type: 'error' | 'alert' | 'success';
}

export const Container = styled.div<ToastProps>`
  max-width: 448px;
  width: 100%;
  height: 82px;

  background: ${({ theme }) => theme.color.primary};

  border-left: 4px solid transparent;

  border-radius: 4px 0 0 4px;

  display: flex;
  align-items: center;

  padding-left: 24px;

  box-shadow: ${({ theme }) => theme.shadow.shadow_01};

  position: relative;

  > span {
    font-size: 48px;
  }

  div {
    margin-left: 16px;

    p {
      font-size: 14px;

      margin-top: 8px;
    }
  }

  .close {
    background: transparent;

    cursor: pointer;

    position: absolute;

    top: 8px;
    right: 8px;

    span {
      color: ${({ theme }) => theme.color.white_50};
    }
  }

  ${({ type, theme }) =>
    type === 'error' &&
    css`
      border-color: ${theme.color.red};

      > span {
        color: ${theme.color.red};
      }
    `}

  ${({ type, theme }) =>
    type === 'alert' &&
    css`
      border-color: ${theme.color.yellow};

      > span {
        color: ${theme.color.yellow};
      }
    `}


  ${({ type, theme }) =>
    type === 'success' &&
    css`
      border-color: ${theme.color.green};

      > span {
        color: ${theme.color.green};
      }
    `}
`;
