import { Container } from './styled';

const Button = ({ label, link, isPrimaryCta, fullWidth, isSubmit }) => {
  return (
    <Container href={link} isPrimaryCta={isPrimaryCta} fullWidth={fullWidth} isSubmit={isSubmit}>
      {label}
    </Container>
  );
};

export default Button;
