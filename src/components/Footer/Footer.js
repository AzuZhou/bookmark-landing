import { useContext } from 'react';
import Link from 'next/link';

import { ContentContext } from 'context/ContentContext';

import FacebookIcon from '../../../public/icon-facebook.svg';
import TwitterIcon from '../../../public/icon-twitter.svg';
import LogoIcon from '../../../public/logo-bookmark.svg';

import { Container, Logo, Socials } from './styled';

const Footer = () => {
  const { settings } = useContext(ContentContext);
  const { footerLinksCollection, facebookLink, twitterLink } = settings || {};
  const { items } = footerLinksCollection || [];

  return (
    <Container>
      <div>
        <div>
          <Link href="/">
            <Logo>
              <LogoIcon />
            </Logo>
          </Link>

          <ul>
            {items
              ? items.map(({ label, link }) => {
                  return (
                    <li key={label}>
                      <a href={link}>{label}</a>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>

        <Socials>
          <a href={facebookLink}>
            <FacebookIcon />
          </a>
          <a href={twitterLink}>
            <TwitterIcon />
          </a>
        </Socials>
      </div>
    </Container>
  );
};

export default Footer;
