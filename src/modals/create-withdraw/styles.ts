import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;

  > .inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 32px;
  }
`;
