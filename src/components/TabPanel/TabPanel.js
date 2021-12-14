import Detail from 'components/shared/Detail';

const TabPanel = ({ activeTab }) => {
  return <Detail data={activeTab.tabContent} />;
};

export default TabPanel;
