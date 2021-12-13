import { Container } from './styled';

const Button = ({ label, link, isPrimaryCta, fullWidth }) => {
  return (
    <Container href={link} isPrimaryCta={isPrimaryCta} fullWidth={fullWidth}>
      {label}
    </Container>
  );
};

export default Button;
