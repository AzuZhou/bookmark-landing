import styled from 'styled-components';

import { PADDING, COLORS, FONT_SIZES } from 'styles/constants';
import { desktopBreakpoint, buttonStyles, submitButton } from 'styles/styled';

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;

  background-color: ${COLORS.SOFT_BLUE};

  > div {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px ${PADDING.MOBILE};
    margin: 0 auto;

    > span {
      color: ${COLORS.WHITE};
      text-transform: uppercase;
      letter-spacing: 4px;
      font-size: ${FONT_SIZES.MOBILE.SECONDARY_TEXT};
    }

    h2 {
      color: ${COLORS.WHITE};
      text-align: center;
      margin: 12px 0 30px 0;
    }
  }

  ${desktopBreakpoint} {
    > div {
      width: 50%;
      padding: 60px ${PADDING.DESKTOP};
      gap: 30px;

      span {
        font-size: ${FONT_SIZES.DESKTOP.SECONDARY_TEXT};
        letter-spacing: 6px;
      }

      h2 {
        margin: 0;
        max-width: 500px;
      }
    }
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  > div {
    position: relative;
    width: 100%;
    overflow: ${({ isError }) => (isError ? 'visible' : 'hidden')};

    label {
      height: 1px;
      position: absolute;
      left: -10000px;
    }

    svg {
      position: absolute;
      z-index: 2;
      right: 12px;
      top: 17px;

      transition: opacity 0.2s linear;
      opacity: ${({ isError }) => (isError ? '1' : '0')};
    }
  }

  ${desktopBreakpoint} {
    flex-direction: row;
    justify-content: center;

    > div {
      height: 54px;
      max-width: 300px;
    }
  }
`;

const Input = styled.input`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 12px 16px;

  border-radius: 4px;
  border: 2px solid transparent;
  font-size: ${FONT_SIZES.MOBILE.PRIMARY_TEXT};
  line-height: 26px;
  border-color: ${({ isError }) => (isError ? COLORS.SOFT_RED : 'transparent')};

  ${desktopBreakpoint} {
    font-size: ${FONT_SIZES.DESKTOP.PRIMARY_TEXT};
    line-height: 24px;
  }
`;

const ErrorMessage = styled.div`
  width: 100%;

  font-size: ${FONT_SIZES.MOBILE.SECONDARY_TEXT};
  font-style: italic;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.SOFT_RED};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: height 0.2s linear, transform 0.2s linear, opacity 0.2s linear;

  ${({ isError }) =>
    isError
      ? `
  height: auto;
  transform: translateY(-2px);
  opacity: 1;
  padding: 6px 12px;
  `
      : `
  height: 0;
  transform: translateY(-100%);
  opacity: 0;
  padding: 0;
  `}
`;

const Submit = styled.button`
  ${buttonStyles}
  ${submitButton}

  max-width: none;

  ${desktopBreakpoint} {
    max-width: 150px;
  }
`;

export { Section, Submit, Form, Input, ErrorMessage };
