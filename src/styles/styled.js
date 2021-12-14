import styled, { css } from 'styled-components';

import { COLORS, FONT_SIZES, HEADER_HEIGHT } from './constants';

const desktopBreakpoint = '@media screen and (min-width: 1025px)';

const Main = styled.main`
  position: relative;
  width: 100vw;
  margin: ${HEADER_HEIGHT.MOBILE} 0 0 0;
  padding: 60px 0 0 0;

  > section ~ section {
    margin-top: 80px;
  }

  ${desktopBreakpoint} {
    margin: ${HEADER_HEIGHT.DESKTOP} 0 0 0;

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

  h1,
  h2,
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
    max-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '50%')};
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

const buttonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? 'none' : '150px')};
  padding: 10px 16px;

  border-radius: 4px;
  border: 2px solid transparent;
`;

export {
  desktopBreakpoint,
  Main,
  Info,
  primaryButton,
  secondaryButton,
  submitButton,
  buttonStyles
};
