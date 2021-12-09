import { createGlobalStyle } from 'styled-components';

import { COLORS, FONT_SIZES, FONT_WEIGHTS } from './constants';

// - Mobile: 375px
// - Desktop: 1440px

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: 'Rubik', sans-serif;
    color: ${COLORS.DARK_BLUE};
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    &:visited, &:active, &:focus {
      color: ${COLORS.SOFT_RED};
    }
  }

  button {
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
  }
 
  p, span, a {
    font-size: ${FONT_SIZES.DEFAULT}
    font-weight: ${FONT_WEIGHTS.REGULAR}
  }
`;

export default GlobalStyle;
