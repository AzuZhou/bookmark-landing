import styled from 'styled-components';

import { primaryButton, secondaryButton, submitButton } from 'styles/styled';

const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? 'none' : '150px')};
  padding: 12px 16px;

  border-radius: 4px;
  border: 2px solid transparent;
  ${({ isPrimaryCta, isSubmit }) =>
    isPrimaryCta && isSubmit ? submitButton : isPrimaryCta ? primaryButton : secondaryButton}
`;

export { Container };
