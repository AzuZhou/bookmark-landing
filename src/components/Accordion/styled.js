import styled from 'styled-components';

import { COLORS } from 'styles/constants';
import { desktopBreakpoint } from 'styles/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > hr {
    display: none;
    width: 100%;
    border: none;
    border-top: 1px solid ${COLORS.GREYISH_BLUE};
    opacity: 0.4;
  }

  ${desktopBreakpoint} {
    > hr {
      display: initial;
    }
  }
`;

export { Container };
