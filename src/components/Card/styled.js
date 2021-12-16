import styled from 'styled-components';

import { COLORS, FONT_SIZES } from 'styles/constants';
import { desktopBreakpoint } from 'styles/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;

  border-radius: 8px;
  box-shadow: ${COLORS.SHADOW_BLUE} 0px 4px 12px;

  opacity: 0;
  &:first-child {
    animation: ${({ startAnimation }) => (startAnimation ? 'appear 1s ease-out forwards' : 'none')};
  }
  &:nth-child(2) {
    animation: ${({ startAnimation }) =>
      startAnimation ? 'appear 1s 0.2s ease-out forwards' : 'none'};
  }

  &:last-child {
    animation: ${({ startAnimation }) =>
      startAnimation ? 'appear 1s 0.4s ease-out forwards' : 'none'};
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0 24px 0;

    > div {
      max-width: 100px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: ${FONT_SIZES.MOBILE.PRIMARY_TEXT};
      line-height: 26px;
      letter-spacing: 0.6px;
    }

    span {
      font-size: ${FONT_SIZES.MOBILE.SECONDARY_TEXT};
      line-height: 22px;
    }
  }

  > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0 20px 0;
  }

  ${desktopBreakpoint} {
    h3 {
      font-size: ${FONT_SIZES.DESKTOP.PRIMARY_TEXT};
      line-height: 28px;
    }

    span {
      font-size: ${FONT_SIZES.DESKTOP.SECONDARY_TEXT};
      line-height: 24px;
    }
  }
`;

const Separation = styled.div`
  width: 100%;
  height: 15px;
  // dot size
  background-image: radial-gradient(${COLORS.SHADOW_BLUE} 2px, white 0%);
  // width, distace
  background-size: 6% 100%;
  background-position-x: -3px;
`;

export { Container, Separation };
