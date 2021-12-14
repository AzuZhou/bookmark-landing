import styled from 'styled-components';

import { COLORS, FONT_SIZES } from 'styles/constants';
import { desktopBreakpoint } from 'styles/styled';

const Collapse = styled.div`
  overflow: hidden;

  > hr {
    border: none;
    border-bottom: 1px solid ${COLORS.GREYISH_BLUE};
    opacity: 0.4;
  }
`;

const Expand = styled.button`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 0;

  background-color: ${COLORS.WHITE};

  span {
    transition: color 0.2s linear;
    color: ${COLORS.DARK_BLUE};
    font-size: ${FONT_SIZES.MOBILE.PRIMARY_TEXT};
    line-height: 26px;

    ${desktopBreakpoint} {
      font-size: ${FONT_SIZES.DESKTOP.PRIMARY_TEXT};
      line-height: 28px;
    }
  }

  svg {
    transition: transform 0.2s linear;
    transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')};
    path {
      stroke: ${({ isExpanded }) => (isExpanded ? COLORS.SOFT_RED : COLORS.SOFT_BLUE)};
    }
  }

  &:hover:not(:focus) {
    span {
      color: ${COLORS.SOFT_RED};
    }
  }
`;

const Panel = styled.p`
  overflow: hidden;
  transition: all 0.2s linear;

  ${({ isExpanded }) =>
    isExpanded
      ? `
  height: auto;
  transform: translateY(0);
  opacity: 1;
  padding: 12px 0 24px 0;
  `
      : `
  height: 0;
  transform: translateY(-100%);
  opacity: 0;
  padding: 0;
  `}

  color: ${COLORS.GREY};
  font-size: ${FONT_SIZES.MOBILE.PRIMARY_TEXT};
  line-height: 26px;

  ${desktopBreakpoint} {
    font-size: ${FONT_SIZES.DESKTOP.PRIMARY_TEXT};
    line-height: 28px;
  }
`;

export { Collapse, Expand, Panel };
