import styled from 'styled-components';

import { primaryButton, secondaryButton, submitButton } from 'styles/styled';

const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 150px;
  padding: 12px 16px;

  white-space: nowrap;
  border-radius: 4px;
  border: 2px solid transparent;
  ${(props) =>
    props.isPrimaryCta && props.isSubmit
      ? submitButton
      : props.isPrimaryCta
      ? primaryButton
      : secondaryButton}
`;

export { Container };
