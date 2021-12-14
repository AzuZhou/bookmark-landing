import styled from 'styled-components';

import { COLORS, FONT_WEIGHTS, FONT_SIZES } from 'styles/constants';
import { desktopBreakpoint, submitButton, buttonStyles } from 'styles/styled';

const Container = styled.nav`
  width: 100%;

  ${({ isBurgerOpen }) =>
    isBurgerOpen
      ? `
  display: flex;
  flex-direction: column;
  `
      : `
  display: none;
  `};

  hr {
    width: 100%;
    border: none;
    border-top: 1px solid ${COLORS.WHITE};
    opacity: 0.2;
  }

  ul {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  ${desktopBreakpoint} {
    display: flex;
    justify-content: flex-end;

    hr {
      display: none;
    }

    ul {
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-top: 20px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    font-weight: ${FONT_WEIGHTS.REGULAR};
    font-size: ${FONT_SIZES.DESKTOP.PRIMARY_TEXT};
    line-height: 28px;
    text-transform: uppercase;
    color: ${COLORS.WHITE};
    letter-spacing: 2px;
  }

  ${desktopBreakpoint} {
    &:last-child {
      margin-top: 0;
      margin-left: 16px;
    }

    a {
      padding: 10px 16px;
      font-size: ${FONT_SIZES.DESKTOP.SECONDARY_TEXT};
      line-height: 24px;
    }

    a:not(:last-child) {
      letter-spacing: 1px;
      color: ${COLORS.DARK_BLUE};
      transition: color 0.2s linear;

      &:hover,
      &:active,
      &:focus {
        color: ${COLORS.SOFT_RED};
      }
    }
  }
`;

const Button = styled.a`
  ${buttonStyles}
  ${submitButton};

  border-radius: 4px;
  background-color: ${COLORS.DARK_BLUE};
  border: 2px solid ${COLORS.WHITE};

  ${desktopBreakpoint} {
    color: ${COLORS.WHITE};
    background-color: ${COLORS.SOFT_RED};
    border-color: ${COLORS.SOFT_RED};
  }
`;

export { Container, Item, Button };
