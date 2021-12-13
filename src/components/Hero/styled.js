import styled from 'styled-components';
import Image from 'next/image';

import { COLORS, FONT_SIZES, PADDING } from 'styles/constants';
import { desktopBreakpoint } from 'styles/styled';

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  max-width: 1200px;
  padding: 0 ${PADDING.MOBILE};
  margin: 0 auto;

  ${desktopBreakpoint} {
    flex-direction: row;
    padding: 0 ${PADDING.DESKTOP};
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  h1 {
    font-size: ${FONT_SIZES.MOBILE.TITLE};
    text-align: center;
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
    align-items: flex-start;

    h1 {
      font-size: ${FONT_SIZES.DESKTOP.TITLE};
      text-align: left;
    }

    p {
      text-align: left;
    }
  }
`;

const Decoration = styled.div`
  width: 100%;

  div {
    position: absolute;
    right: 0;
    bottom: -15%;
    z-index: -1;

    background-color: ${COLORS.SOFT_BLUE};
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
  }

  ${desktopBreakpoint} {
    max-width: 50%;
  }
`;

const Img = styled(Image)`
  width: 100%;
`;

export { Section, Info, Decoration, Img };
