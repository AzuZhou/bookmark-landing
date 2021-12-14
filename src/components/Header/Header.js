import { useContext } from 'react';

import { ContentContext } from 'context/ContentContext';

import { useBurger } from 'utils/hooks';

import Navbar from 'components/Navbar';

import LogoIcon from '../../../public/logo-bookmark.svg';
import BurgerIcon from '../../../public/icon-hamburger.svg';
import CloseIcon from '../../../public/icon-close.svg';
// import FacebookIcon from '../../../public/icon-facebook.svg';
// import TwitterIcon from '../../../public/icon-twitter.svg';

import { Container, Burger, Logo } from './styled';

const Header = () => {
  const { settings } = useContext(ContentContext);
  const [isBurgerOpen, handleBurger] = useBurger();
  const {
    //    logo,
    navigationBarLinksCollection
  } = settings || {};
  //   const { title, url, height, width } = logo || {};
  const { items } = navigationBarLinksCollection || [];

  return (
    <Container isBurgerOpen={isBurgerOpen}>
      <div>
        <Logo isBurgerOpen={isBurgerOpen}>
          <LogoIcon />
        </Logo>

        <Burger>
          {isBurgerOpen ? (
            <button onClick={handleBurger}>
              <CloseIcon />
            </button>
          ) : (
            <button onClick={handleBurger}>
              <BurgerIcon />
            </button>
          )}
        </Burger>
      </div>

      <Navbar items={items} isBurgerOpen={isBurgerOpen} />
    </Container>
  );
};

export default Header;
