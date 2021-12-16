import styled from 'styled-components';

import { COLORS, PADDING } from 'styles/constants';
import { desktopBreakpoint } from 'styles/styled';

const Section = styled.section`
  position: relative;
  display: flex;
  width: 100%;

  opacity: 0;
  animation: ${({ startAnimation }) => (startAnimation ? 'appear 1s ease-out forwards' : 'none')};

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  > div {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    gap: 30px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 ${PADDING.MOBILE};
  }

  ${desktopBreakpoint} {
    > div {
      flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};
      padding: 0 ${PADDING.DESKTOP};
    }
  }
`;

const Decoration = styled.div`
  width: 100%;

  > div:last-child {
    position: absolute;
    z-index: -1;
    background-color: ${COLORS.SOFT_BLUE};
    transform: scaleY(0.9);
  }

  img {
    width: 100%;
  }

  ${desktopBreakpoint} {
    max-width: 50%;

    > div:last-child {
      transform: scaleY(1);
    }

    img {
      width: 50%;
    }
  }
`;

export { Section, Decoration };
