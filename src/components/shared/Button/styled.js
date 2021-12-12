import styled from 'styled-components';

import { primaryButton, secondaryButton } from 'styles/styled';

const Container = styled.a`
  ${(props) => (props.isPrimaryCta ? primaryButton : secondaryButton)}
`;

export { Container };
