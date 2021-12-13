import styled from 'styled-components';

import { PADDING } from 'styles/constants';
import { desktopBreakpoint } from 'styles/styled';

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  padding: 0 ${PADDING.MOBILE};
  margin: 0 auto;

  ${desktopBreakpoint} {
    padding: 0 ${PADDING.DESKTOP};
  }
`;

export { Section };
