import { useState } from 'react';

import TabPanel from 'components/TabPanel';

import { Container, Tab } from './styled';

const Tabs = ({ tabs }) => {
  const [activeTabKey, setActiveTabKey] = useState(0);

  return (
    <Container>
      <div>
        <hr />
        {tabs &&
          tabs.map(({ tabTitle }, index) => (
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

      <TabPanel activeTab={tabs[activeTabKey]} />
    </Container>
  );
};

export default Tabs;
