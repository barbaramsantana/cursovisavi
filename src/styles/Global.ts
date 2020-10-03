import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --color-app-background: #F5F5F5;
    --color-header-background: #11183D;
    --color-header-text: #FFFFFF;
    --color-content-background: #FFFFFF;
    --color-content-text: #11183D;
    --color-content-button-background: #11183D;
    --color-content-button-background-hover: #1e2a6b;
    --color-content-button-text: #FFFFFF;
    --color-content-button-before-after-enabled: #11183D;
    --color-content-button-before-after-disabled: #11183D60;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-app-background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  body,
  input,
  button {
    font-family: "Quicksand", Arial, Helvetica, sans-serif;
  }
`;
