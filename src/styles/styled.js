import styled, { css } from 'styled-components';

import {
  COLORS
  //  FONT_SIZES, FONT_WEIGHTS
} from './constants';

const Main = styled.main`
  position: relative;
  width: 100vw;
`;

const desktopBreakpoint = '@media screen and (min-width: 1025px)';

const getButtonStyles = (backgroundColor, color, isPrimary) =>
  css`
    background-color: ${backgroundColor};
    color: ${color};
    border-color: ${backgroundColor};
    transition: background-color 0.2s linear, color 0.2s linear, border-color 0.2s linear;

    &:hover,
    &:active,
    &:focus {
      background-color: ${COLORS.WHITE};
      color: ${isPrimary ? backgroundColor : color};
      border-color: ${isPrimary ? backgroundColor : color};
    }
  `;

const primaryButton = getButtonStyles(COLORS.SOFT_BLUE, COLORS.WHITE, true);

const secondaryButton = getButtonStyles(COLORS.LIGHT_GREY, COLORS.DARK_BLUE, false);

const submitButton = getButtonStyles(COLORS.SOFT_RED, COLORS.WHITE, true);

export { Main, primaryButton, secondaryButton, submitButton, desktopBreakpoint };
