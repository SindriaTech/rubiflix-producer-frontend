import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 64px;

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: ${({ theme }) => theme.shadow.shadow_01};

  background: ${({ background }) => background};

  &:disabled {
    filter: grayscale(1);

    opacity: 0.5;

    cursor: not-allowed;
  }
`;
