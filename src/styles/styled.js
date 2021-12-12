import styled, { css } from 'styled-components';

import {
  COLORS
  //  FONT_SIZES, FONT_WEIGHTS
} from './constants';

const Main = styled.main`
  position: relative;
  width: 100vw;
`;

const primaryButton = css`
  background-color: ${COLORS.SOFT_BLUE};
  color: ${COLORS.WHITE};
`;

const secondaryButton = css`
  background-color: ${COLORS.LIGHT_GREY};
  color: ${COLORS.DARK_BLUE};
`;

const desktopBreakpoint = '@media screen and (min-width: 1025px)';

export { Main, primaryButton, secondaryButton, desktopBreakpoint };
