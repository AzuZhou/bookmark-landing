import { Container } from './styled';

const Button = ({ label, link, isPrimaryCta }) => (
  <Container href={link} isPrimaryCta={isPrimaryCta}>
    {label}
  </Container>
);

export default Button;
