import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --color-app-background: #F5F5F5;
    --color-header-background: #11183D;
    --color-header-text: #FFFFFF;
    --color-content-background: #FFFFFF;
    --color-content-text: #11183D;

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

  body,
  input,
  button {
    font-family: "Quicksand", Arial, Helvetica, sans-serif;
  }
`;
