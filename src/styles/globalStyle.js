import { createGlobalStyle } from 'styled-components';

import { COLORS, FONT_SIZES, FONT_WEIGHTS } from './constants';

import { desktopBreakpoint } from './styled';

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
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
  }
 
  button, a {
    cursor: pointer;
    font-size: ${FONT_SIZES.MOBILE.SECONDARY_TEXT};
    font-weight: ${FONT_WEIGHTS.MEDIUM};
    line-height: 20px;

    ${desktopBreakpoint} {
      font-size: ${FONT_SIZES.DESKTOP.SECONDARY_TEXT};
      line-height: 22px;
    }
  }

  p, span {
    color: ${COLORS.GREYISH_BLUE};
    font-size: ${FONT_SIZES.MOBILE.PRIMARY_TEXT};
    font-weight: ${FONT_WEIGHTS.REGULAR};
    line-height: 24px;

    ${desktopBreakpoint} {
      font-size: ${FONT_SIZES.DESKTOP.PRIMARY_TEXT};
      line-height: 26px;
    }
  }

  button, a  {
    white-space: nowrap;
  }
`;

export default GlobalStyle;
