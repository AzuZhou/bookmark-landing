import { useState } from 'react';

import Panel from 'components/Panel';

import { Container, Tab } from './styled';

const Tabs = ({ tabs }) => {
  const [activeTabKey, setActiveTabKey] = useState(0);

  // TODO: loaders
  if (!tabs) <div>...Loading</div>;

  return (
    <Container>
      <div>
        <hr />
        {tabs.map(({ tabTitle }, index) => (
          <Tab
            key={tabTitle}
            isActive={index === activeTabKey}
            onClick={() => setActiveTabKey(index)}
          >
            <span>{tabTitle}</span>
            <hr />
          </Tab>
        ))}
      </div>

      <Panel activeTab={tabs[activeTabKey]} />
    </Container>
  );
};

export default Tabs;
