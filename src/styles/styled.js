import styled, { css } from 'styled-components';

import {
  COLORS,
  FONT_SIZES
  //FONT_WEIGHTS
} from './constants';

const desktopBreakpoint = '@media screen and (min-width: 1025px)';

const Main = styled.main`
  position: relative;
  width: 100vw;
  margin: 40px 0;

  > section ~ section {
    margin-top: 80px;
  }

  ${desktopBreakpoint} {
    margin: 60px 0;

    > section ~ section {
      margin-top: 120px;
    }
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  h1 {
    text-align: center;
    font-size: ${FONT_SIZES.MOBILE.TITLE};
    line-height: 42px;
    letter-spacing: 1px;
  }

  h2 {
    text-align: center;
    font-size: ${FONT_SIZES.MOBILE.SUBTITLE};
    line-height: 32px;
    letter-spacing: 0.8px;
  }

  p {
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  ${desktopBreakpoint} {
    max-width: 50%;
    align-items: ${({ isReverse, isCenter }) =>
      isCenter ? 'center' : isReverse ? 'flex-end' : 'flex-start'};

    h1 {
      font-size: ${FONT_SIZES.DESKTOP.TITLE};
      text-align: left;
    }

    h2 {
      font-size: ${FONT_SIZES.DESKTOP.SUBTITLE};
    }

    p {
      text-align: ${({ isReverse, isCenter }) =>
        isCenter ? 'center' : isReverse ? 'right' : 'left'};
    }
  }
`;

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

export { desktopBreakpoint, Main, Info, primaryButton, secondaryButton, submitButton };
