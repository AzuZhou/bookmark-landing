import { useState } from 'react';

import AccordionCollapse from 'components/AccordionCollapse';

import { Container } from './styled';

const Accordion = ({ faqs }) => {
  const [expandedQuestionKey, setExpandedQuestionKey] = useState(null);

  const handleExpand = (index) => {
    if (index === expandedQuestionKey) setExpandedQuestionKey(null);
    if (index !== expandedQuestionKey) setExpandedQuestionKey(index);
  };

  return (
    <Container>
      <hr />
      {faqs &&
        faqs.map((faq, index) => (
          <AccordionCollapse
            isExpanded={index === expandedQuestionKey}
            key={faq.question}
            {...faq}
            handleExpand={() => handleExpand(index)}
          />
        ))}
    </Container>
  );
};

export default Accordion;
