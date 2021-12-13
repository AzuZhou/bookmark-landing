import styled from 'styled-components';

import { PADDING } from 'styles/constants';
import { desktopBreakpoint } from 'styles/styled';

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  max-width: 1200px;
  padding: 0 ${PADDING.MOBILE};
  margin: 0 auto;

  ${desktopBreakpoint} {
    padding: 0 ${PADDING.DESKTOP};
  }
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  ${desktopBreakpoint} {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    > div:first-child + div {
      margin-top: 30px;
    }

    > div + div:last-child {
      margin-top: 60px;
    }
  }
`;

export { Section, Cards };
