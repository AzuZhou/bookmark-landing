import styled from 'styled-components';

import { COLORS } from 'styles/constants';

const Ring = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 40px;
  height: 40px;

  &:after {
    content: ' ';
    display: block;
    width: 32px;
    height: 32px;
    margin: 4px;
    border-radius: 50%;
    border: 3px solid ${COLORS.DARK_BLUE};
    border-color: ${COLORS.DARK_BLUE} transparent ${COLORS.DARK_BLUE} transparent;
    animation: rotate 0.8s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Ring };
