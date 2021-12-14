import { Container, Item } from './styled';

const Navbar = ({ items }) => {
  return (
    <Container>
      <ul>
        {items
          ? items.map(({ label, isPrimaryCta, link }) => {
              console.log('isPrimaryCta: ', isPrimaryCta);
              return (
                <Item key={label}>
                  <a href={link}>{label}</a>
                </Item>
              );
            })
          : null}
      </ul>
    </Container>
  );
};

export default Navbar;
