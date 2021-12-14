import styled from 'styled-components';

import { PADDING, FONT_SIZES, FONT_WEIGHTS, COLORS } from 'styles/constants';
import { desktopBreakpoint } from 'styles/styled';

const Container = styled.footer`
  width: 100%;
  display: flex;

  background-color: ${COLORS.DARK_BLUE};

  > div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0 40px 0;
  }

  > div > div:first-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
      display: flex;
      flex-direction: column;
      margin: 40px 0;

      li {
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 16px;

          font-weight: ${FONT_WEIGHTS.REGULAR};
          font-size: ${FONT_SIZES.MOBILE.PRIMARY_TEXT};
          line-height: 26px;
          text-transform: uppercase;
          color: ${COLORS.WHITE};
          letter-spacing: 2px;
          transition: color 0.2s linear;

          &:hover,
          &:active,
          &:focus {
            color: ${COLORS.SOFT_RED};
          }
        }
      }
    }
  }

  ${desktopBreakpoint} {
    flex-direction: row;

    > div {
      flex-direction: inherit;
      justify-content: space-between;
      padding: 20px ${PADDING.MOBILE};
    }

    > div > div:first-child {
      flex-direction: inherit;
      width: auto;

      ul {
        flex-direction: inherit;
        margin: 0;

        li {
          a {
            font-size: ${FONT_SIZES.DESKTOP.SECONDARY_TEXT};
            line-height: 24px;
          }
        }
      }
    }
  }
`;

const Logo = styled.a`
  height: 25px;

  svg {
    height: 100%;

    path,
    circle {
      transition: fill 0.1s linear;
    }

    path {
      fill: ${COLORS.WHITE};
    }

    circle {
      fill: ${COLORS.SOFT_BLUE};
    }
  }

  ${desktopBreakpoint} {
    margin-right: 36px;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 40px;

  a {
    &:hover,
    &:active,
    &:focus {
      svg {
        path {
          transition: fill 0.2s linear;
          fill: ${COLORS.SOFT_RED};
        }
      }
    }
  }

  ${desktopBreakpoint} {
    gap: 32px;
  }
`;

export { Container, Logo, Socials };
