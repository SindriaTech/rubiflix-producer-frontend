import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  height: auto;

  background: ${({ theme }) => theme.color.primary_dark};
`;

export const Header = styled.header`
  padding: 40px;

  .logo {
    width: 64px;
    height: 64px;

    border-radius: 50%;

    background: ${({ theme }) => theme.color.primary_lighten_2};
  }
`;

export const Questions = styled.div`
  max-width: 544px;
  width: 100%;

  margin: 0 auto;

  > p {
    margin-top: 16px;
  }
`;

export const Form = styled.div`
  margin-top: 32px;

  .input {
    & + .input {
      margin-top: 24px;
    }
  }
`;

export const FormAddress = styled(Form)`
  display: flex;
  flex-wrap: wrap;

  column-gap: 32px;

  .input {
    width: calc(50% - 16px);

    &:nth-child(even) {
      margin-bottom: 24px;
    }

    &.w_100 {
      width: 100%;
    }

    & + .input {
      margin-top: 0;
    }
  }
`;

export const FormProfilePhoto = styled(Form)`
  .input {
    display: flex;
    justify-content: center;
  }
`;

export const Buttons = styled.div`
  margin-top: 48px;
  width: 100%;

  display: flex;
  justify-content: space-between;

  .button {
    max-width: 256px;

    &.back {
      width: 100%;
      height: 64px;

      border-radius: 8px;

      background: ${({ theme }) => theme.color.primary_light};
    }
  }
`;
