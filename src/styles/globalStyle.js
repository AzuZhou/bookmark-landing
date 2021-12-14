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

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${FONT_WEIGHTS.MEDIUM};
  }

  h1 {
    font-size: ${FONT_SIZES.MOBILE.TITLE};
    line-height: 42px;
    letter-spacing: 1px;

    ${desktopBreakpoint} {
      font-size: ${FONT_SIZES.DESKTOP.TITLE};
      line-height: 52px;
    }
  } 

  h2 {
    font-size: ${FONT_SIZES.MOBILE.SUBTITLE};
    line-height: 32px;
    letter-spacing: 0.8px;

    ${desktopBreakpoint} {
      font-size: ${FONT_SIZES.DESKTOP.SUBTITLE};
      line-height: 42px;
    }
  }

  p {
    margin: 0
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
    font-weight: ${FONT_WEIGHTS.MEDIUM};
    font-size: ${FONT_SIZES.MOBILE.PRIMARY_TEXT};
    line-height: 26px;
    
    ${desktopBreakpoint} {
      font-size: ${FONT_SIZES.DESKTOP.SECONDARY_TEXT};
      line-height: 24px;
    }
  }

  p, span {
    color: ${COLORS.GREYISH_BLUE};
    font-size: ${FONT_SIZES.MOBILE.PRIMARY_TEXT};
    font-weight: ${FONT_WEIGHTS.REGULAR};
    line-height: 26px;

    ${desktopBreakpoint} {
      font-size: ${FONT_SIZES.DESKTOP.PRIMARY_TEXT};
      line-height: 28px;
    }
  }

  button, a  {
    white-space: nowrap;
  }
`;

export default GlobalStyle;
