import styled from 'styled-components';

export const Container = styled.div`
  max-width: 736px;
  width: 100%;
  min-height: 208px;

  border-radius: 16px;

  background: ${({ theme }) => theme.color.primary};

  box-shadow: ${({ theme }) => theme.shadow.shadow_01};

  padding: 32px;

  h4 {
    margin-bottom: 32px;
  }

  div {
  }
`;
