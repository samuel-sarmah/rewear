import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    background-color: #ffffff;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    line-height: 1.1;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  p {
    margin: 0;
  }

  button {
    border-radius: ${({ theme }) => theme.radius.md};
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    transition: background-color 0.25s, transform 0.15s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
      color: ${({ theme }) => theme.colors.textInverse};
      transform: translateY(-1px);
    }

    &:focus,
    &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }
`;
