import { useContext } from 'react';

import { ContentContext } from 'context/ContentContext';

import Card from 'components/Card';

import { Info } from 'styles/styled';
import { Section, Cards } from './styled';

const Extensions = () => {
  const { page } = useContext(ContentContext);
  const { downloadIntro, installationCardsCollection } = page || {};
  const { title, description } = downloadIntro || {};
  const { items: extensions } = installationCardsCollection || [];

  return (
    <Section>
      <Info isCenter>
        <h2>{title}</h2>
        <p>{description}</p>
      </Info>

      {extensions && (
        <Cards>
          {extensions.map((ext) => (
            <Card key={ext.title} {...ext} />
          ))}
        </Cards>
      )}
    </Section>
  );
};

export default Extensions;
