import { useContext } from 'react';
import Link from 'next/link';

import { ContentContext } from 'context/ContentContext';

import { useBurger } from 'utils/hooks';

import Navbar from 'components/Navbar';

import LogoIcon from '../../../public/logo-bookmark.svg';
import BurgerIcon from '../../../public/icon-hamburger.svg';
import CloseIcon from '../../../public/icon-close.svg';
import FacebookIcon from '../../../public/icon-facebook.svg';
import TwitterIcon from '../../../public/icon-twitter.svg';

import { Container, Burger, Logo, Socials } from './styled';

const Header = () => {
  const { settings } = useContext(ContentContext);
  const [isBurgerOpen, handleBurger] = useBurger();
  const { navigationBarLinksCollection, facebookLink, twitterLink } = settings || {};
  const { items } = navigationBarLinksCollection || [];

  return (
    <Container isBurgerOpen={isBurgerOpen}>
      <div>
        <Link href="/">
          <Logo isBurgerOpen={isBurgerOpen}>
            <LogoIcon />
          </Logo>
        </Link>

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

      <Socials>
        <a href={facebookLink}>
          <FacebookIcon />
        </a>
        <a href={twitterLink}>
          <TwitterIcon />
        </a>
      </Socials>
    </Container>
  );
};

export default Header;
