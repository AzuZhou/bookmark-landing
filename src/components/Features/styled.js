import styled from 'styled-components';

import { PADDING } from 'styles/constants';
import { desktopBreakpoint } from 'styles/styled';

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  margin: 0 auto;

  > div:first-child {
    max-width: 1200px;
    padding: 0 ${PADDING.MOBILE};
  }

  ${desktopBreakpoint} {
    > div:first-child {
      padding: 0 ${PADDING.DESKTOP};
    }
  }
`;

export { Section };
