import styled from 'styled-components';

import { desktopBreakpoint } from 'styles/styled';
import { COLORS, HEADER_HEIGHT, PADDING } from 'styles/constants';

const Container = styled.header`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${PADDING.MOBILE};

  ${({ isBurgerOpen }) =>
    isBurgerOpen
      ? `
  height: 100vh;
  background-color: ${COLORS.BACKGROUND_BLUE};
  `
      : `
  height: ${HEADER_HEIGHT.MOBILE};
  background-color: ${COLORS.WHITE};
  `};

  > div:first-child {
    height: ${HEADER_HEIGHT.MOBILE};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${PADDING.MOBILE} 0;
  }

  ${desktopBreakpoint} {
    height: ${HEADER_HEIGHT.DESKTOP};
    flex-direction: row;

    > div:first-child {
      padding: ${PADDING.DESKTOP} 0;
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
  }

  ${({ isBurgerOpen }) =>
    isBurgerOpen
      ? `
      svg {
      path:first-child {
        fill: ${COLORS.WHITE};
      }

      circle {
          fill: ${COLORS.WHITE};
      }

      path:last-child {
        fill: ${COLORS.BACKGROUND_BLUE};
      }
  }
  `
      : `
      svg {
        path:first-child {
        fill: ${COLORS.DARK_BLUE};
      }
      
      circle {
          fill: ${COLORS.SOFT_BLUE};
      }

      path:last-child {
          fill: ${COLORS.WHITE};
      }
  `};
`;

const Burger = styled.div`
  button {
    height: 25px;
    display: flex;
    align-items: center;
  }

  ${desktopBreakpoint} {
    display: none;
  }
`;

const Socials = styled.div`
  position: absolute;
  bottom: ${PADDING.MOBILE};
  display: flex;

  a {
    padding: ${PADDING.MOBILE};
  }

  ${desktopBreakpoint} {
    display: none;
  }
`;
export { Container, Logo, Burger, Socials };
