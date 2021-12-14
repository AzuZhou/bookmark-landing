import Arrow from '../../../public/icon-arrow.svg';

import { Collapse, Expand, Panel } from './styled';

const AccordionCollapse = ({ question, answer, isExpanded, handleExpand }) => (
  <Collapse>
    <Expand onClick={handleExpand} isExpanded={isExpanded}>
      <span>{question}</span>
      <Arrow width={18} height={12} />
    </Expand>
    <Panel isExpanded={isExpanded}>{answer}</Panel>
    <hr />
  </Collapse>
);

export default AccordionCollapse;
