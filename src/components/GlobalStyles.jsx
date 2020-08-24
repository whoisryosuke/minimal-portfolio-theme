import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --colors-black: #000;
    --colors-dark-gray: #333;
    --colors-primary: royalblue;
  }
  body {
    margin: 0;
    padding: 3em;
    overflow-x: hidden;
    font-family: 'Playfair Display', serif;
    line-height:2em;

    cursor: url('./assets/Cursor.svg'), auto;
  }

  a {
    color: var(--colors-black);
  }
  
  a:visited {
    color: var(--colors-dark-gray);
  }

  h1,h2,h3,h4,h5,h6 {
    letter-spacing:-0.02em;
  }
`;

export default GlobalStyles;
