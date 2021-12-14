import { Container, Item, Button } from './styled';

const Navbar = ({ items, isBurgerOpen }) => (
  <Container isBurgerOpen={isBurgerOpen}>
    <hr />
    <ul>
      {items
        ? items.map(({ isPrimaryCta, label, link }) => {
            if (isPrimaryCta)
              return (
                <Item key={label}>
                  <Button href={link} isBurgerOpen={isBurgerOpen} fullWidth>
                    {label}
                  </Button>
                </Item>
              );

            return (
              <Item key={label}>
                <a href={link}>{label}</a>
                <hr />
              </Item>
            );
          })
        : null}
    </ul>
  </Container>
);

export default Navbar;
