import { useContext } from 'react';

import { ContentContext } from 'context/ContentContext';

import Accordion from 'components/Accordion';
import Button from 'components/shared/Button';

import { Info } from 'styles/styled';
import { Section } from './styled';

const Faqs = () => {
  const { page } = useContext(ContentContext);
  const { faqIntro, frequentlyAskedQuestionsCollection, faqCta } = page || {};
  const { title, description } = faqIntro || {};
  const { items: faqs } = frequentlyAskedQuestionsCollection || [];

  return (
    <Section>
      <Info isCenter isFullWidth>
        <h2>{title}</h2>
        <p>{description}</p>
      </Info>

      <Accordion faqs={faqs} />

      <Button {...faqCta} />
    </Section>
  );
};

export default Faqs;
