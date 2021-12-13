import { Container } from './styled';

const Button = ({ label, link, isPrimaryCta }) => {
  return (
    <Container href={link} isPrimaryCta={isPrimaryCta}>
      {label}
    </Container>
  );
};

export default Button;
