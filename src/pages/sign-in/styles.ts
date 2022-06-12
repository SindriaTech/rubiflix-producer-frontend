import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const SignInBox = styled.div`
  max-width: 448px;
  min-height: 100vh;
  height: 100%;

  position: relative;

  .logo {
    display: inline-block;

    width: 64px;
    height: 64px;

    border-radius: 50%;

    background: ${({ theme }) => theme.color.primary_lighten_2};

    margin-top: 40px;
  }

  h4 {
    margin-top: 104px;
  }

  p {
    margin-top: 16px;
  }

  .register {
    position: absolute;

    bottom: 40px;
    left: 50%;

    transform: translate3d(-50%, 0, 0);

    white-space: nowrap;

    text-decoration: none;

    h6 {
      transition: color 0.4s;

      color: ${({ theme }) => theme.color.white_50};

      &:hover {
        color: ${({ theme }) => theme.color.white};
      }
    }
  }
`;

export const Form = styled.form`
  margin-top: 32px;

  .input {
    & + .input {
      margin-top: 24px;
    }
  }

  .forgot_password {
    display: block;

    font-weight: 600;

    color: ${({ theme }) => theme.color.white_50};

    text-decoration: none;

    margin-top: 16px;

    transition: color 0.4s;

    &:hover {
      color: ${({ theme }) => theme.color.white};
    }
  }

  .submit {
    margin-top: 40px;

    width: 256px;
    height: 64px;

    border-radius: 8px;

    background: ${({ theme }) => theme.gradient.gradient_purple};

    font-size: 18px;
  }
`;

export const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  position: absolute;
  top: 0;

  display: grid;
  grid-template-columns: 1fr 1fr;

  z-index: -1;

  div {
    &:first-child {
      background: ${({ theme }) => theme.color.primary_dark};
    }

    &:nth-of-type(2) {
      background-size: cover;
      cursor: pointer;

      position: relative;

      &::after {
        content: '';

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: ${({ theme }) => theme.color.black_50};
      }
    }
  }
`;
