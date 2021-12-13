import styled from 'styled-components';

import { COLORS } from 'styles/constants';
import { desktopBreakpoint } from 'styles/styled';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > hr {
      width: 100%;
      border: none;
      border-top: 1px solid ${COLORS.GREYISH_BLUE};
      opacity: 0.4;
    }
  }

  ${desktopBreakpoint} {
    > div {
      max-width: 50%;
      flex-direction: row;

      > hr {
        display: none;
      }
    }
  }
`;

const Tab = styled.button`
  width: 100%;

  span {
    position: relative;
    display: inline-flex;
    justify-content: center;
    padding: 12px 16px;

    color: ${COLORS.DARK_BLUE};

    transition: border-bottom 0.2s linear;

    ${({ isActive }) =>
      isActive &&
      `&:after {
          content: '';
          position: absolute;
          height: 4px;
          width: calc(92% - 32px);
          bottom: 0;
          background-color: ${COLORS.SOFT_RED};
    }`}
  }

  hr {
    border: none;
    border-bottom: 1px solid ${COLORS.GREYISH_BLUE};
    opacity: 0.4;
  }

  ${desktopBreakpoint} {
    max-width: 250px;

    span {
      width: 100%;

      border-bottom: 4px solid ${({ isActive }) => (isActive ? COLORS.SOFT_RED : 'transparent')};

      &:after {
        content: none;
      }
    }
  }
`;

export { Container, Tab };
