import styled from 'styled-components';

import { primaryButton, secondaryButton, submitButton, buttonStyles } from 'styles/styled';

const Container = styled.a`
  ${buttonStyles}

  ${({ isPrimaryCta, isSubmit }) =>
    isSubmit ? submitButton : isPrimaryCta ? primaryButton : secondaryButton}
`;

export { Container };
