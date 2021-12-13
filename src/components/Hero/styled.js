import styled from 'styled-components';
import Image from 'next/image';

import { COLORS, PADDING } from 'styles/constants';
import { desktopBreakpoint } from 'styles/styled';

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 30px;
  max-width: 1200px;
  padding: 0 ${PADDING.MOBILE};
  margin: 0 auto;

  ${desktopBreakpoint} {
    flex-direction: row;
    padding: 0 ${PADDING.DESKTOP};
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

export { Section, Decoration, Img };
