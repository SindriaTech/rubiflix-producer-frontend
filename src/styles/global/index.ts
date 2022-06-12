import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;

    box-sizing: border-box;
  }

  body, html {
    min-height: 100vh;
    height: auto;
  }

  body, html, input {
    font-family: 'Inter', sans-serif;
    line-height: 150%;
  }

  h1,h2,h3, h4, h5, h6, strong, label {
    font-family: 'Monda', sans-serif;
    line-height: 130%;
    color: ${({ theme }) => theme.color.white};
    font-weight: 700;
  }

  h4 {
    font-size: 32px;
  }

  h5 {
    font-size: 24px;
  }

  h6 {
    font-size: 18px;
  }

  p {
    color: ${({ theme }) => theme.color.text};

    strong {
      font-family: inherit;
    }
  }

  input {
    font-size: 16px;
  }

  button {
    cursor: pointer;

    transition: 0.4s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;

export const GridContainer = styled.div`
  max-width: calc(1120px + 48px);
  width: 100%;
  height: 100%;

  padding: 0 24px;

  margin: 0 auto;
`;
