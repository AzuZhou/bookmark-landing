import { useContext } from 'react';

import Tabs from 'components/Tabs';

import { ContentContext } from 'context/ContentContext';

import { Info } from 'styles/styled';
import { Section } from './styled';

const Features = () => {
  const { page } = useContext(ContentContext);
  const { featuresIntro, featureTabsCollection } = page || {};
  const { title, description } = featuresIntro || {};
  const { items: tabs } = featureTabsCollection || [];

  return (
    <Section>
      <Info isCenter>
        <h2>{title}</h2>
        <p>{description}</p>
      </Info>

      <Tabs tabs={tabs} />
    </Section>
  );
};

export default Features;
