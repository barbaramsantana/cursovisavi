import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --color-text-company: #000000;
    --color-text-primary: #323535;
    --color-text-secundary: #9A9FA2;
    --color-background-primary: #FFFFFF;
    --color-background-secundary: #e9e9e9;
    --color-background-terciary: #d0d0d0;
    --color-background-quartenary: #e1e1e1;
    --color-open: #008b00;
    --color-closed: #8b0000;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-background-secundary);
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  input, select {
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  h1, h2, h3, h5, p {
    font-family: 'Roboto', sans-serif;
  }

  h4, h6 {
    font-family: 'Josefin Slab', serif;
  }

  h1, h4 {
    font-weight: 700;
  }

  h2, p {
    font-weight: 400;
  }

  h3, h6, h5 {
    font-weight: 300;
  }
`;
