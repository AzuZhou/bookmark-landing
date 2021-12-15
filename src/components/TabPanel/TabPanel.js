import dynamic from 'next/dynamic';

import Loader from 'components/shared/Loader';

const Detail = dynamic(() => import('components/shared/Detail'), {
  loading: () => <Loader />,
  ssr: false
});

const TabPanel = ({ activeTab }) => <Detail data={activeTab.tabContent} />;

export default TabPanel;
