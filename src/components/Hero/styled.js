import styled from 'styled-components';

import { desktopBreakpoint, COLORS } from 'styles/constants';

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;

  ${desktopBreakpoint} {
    flex-direction: row;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  ${desktopBreakpoint} {
    justify-content: flex-start;
  }

  h1 {
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

const Img = styled.img`
  width: 100%;
`;

export { Section, Info, Decoration, Img };
