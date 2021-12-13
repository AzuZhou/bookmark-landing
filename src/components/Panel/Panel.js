import Detail from 'components/shared/Detail';

const Panel = ({ activeTab }) => {
  return <Detail data={activeTab.tabContent} />;
};

export default Panel;
