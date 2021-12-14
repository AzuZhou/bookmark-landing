import { useContext } from 'react';

import { ContentContext } from 'context/ContentContext';

import { Section, Submit } from './styled';

const Newsletter = () => {
  const { page } = useContext(ContentContext);
  const { newsletter } = page || {};
  const { ctaText, inputPlaceholder, tagline, title } = newsletter;

  return (
    <Section>
      <div>
        <span>{tagline}</span>

        <h2>{title}</h2>

        <form>
          <input type="email" placeholder={inputPlaceholder} />
          <Submit type="submit">{ctaText}</Submit>
        </form>
      </div>
    </Section>
  );
};

export default Newsletter;
