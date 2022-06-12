import styled, { css } from 'styled-components';

interface Props {
  disabled: boolean;
}

export const Container = styled.div<Props>`
  label {
    display: inline-block;

    font-family: 'Monda';
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;

    color: ${({ theme }) => theme.color.white};

    margin-bottom: 16px;

    ${({ disabled }) =>
      disabled &&
      css`
        opacity: 0.5;
        cursor: not-allowed;
      `}
  }

  > div {
    width: 100%;
    position: relative;

    ${({ disabled }) =>
      disabled &&
      css`
        opacity: 0.5;
        cursor: not-allowed;
      `}

    select {
      position: absolute;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      height: 0;
      width: 0;
    }
  }
`;

interface SelectProps {
  active: boolean;
}

export const Select = styled.div<SelectProps>`
  position: relative;

  width: 100%;
  height: 64px;

  background: ${({ theme }) => theme.color.primary_lighten};

  border: 2px solid
    ${({ theme, active }) =>
      active ? theme.color.purple : theme.color.primary_lighten_2};
  border-radius: 4px;

  padding: 0 24px;

  display: flex;
  align-items: center;

  transition: border 0.3s;

  p {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    color: #fff;

    &.placeholder {
      color: ${({ theme }) => theme.color.white_50};
    }
  }

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.color.purple};
  }
`;

export const Dropbox = styled.div`
  position: absolute;
  top: calc(100% + 16px);
  left: 0;

  width: 100%;

  border-radius: 4px;

  background: ${({ theme }) => theme.color.primary};

  border: 2px solid ${({ theme }) => theme.color.primary_lighten_2};

  z-index: 2;

  overflow-y: auto;

  div {
    max-height: calc(4 * 48px);

    button {
      width: 100%;
      height: 48px;

      display: flex;
      align-items: center;

      padding-left: 16px;

      color: ${({ theme }) => theme.color.text};

      background: transparent;

      font-size: 16px;

      & + button {
        border-top: 1px solid #1b1818;
      }

      &.selected {
        background: ${({ theme }) => theme.color.purple_30};
        font-weight: bold;
      }
    }
  }
`;

interface ArrowProps {
  selected: boolean;
}

export const Arrow = styled.div<ArrowProps>`
  width: 24px;
  height: 24px;

  position: absolute;
  top: 50%;
  right: 16px;

  transform: ${({ selected }) =>
    `translate3d(0, -50%, 0) ${selected ? 'rotate(180deg)' : ''}`};

  font-size: 24px;

  color: ${({ theme }) => theme.color.white};
`;
