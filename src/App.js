import { useState } from 'react';

import Layout from 'components/Layout';
import Home from 'pages/Home';

import { CmsClientContext } from 'context/CmsClientContext';
import { createCmsClient } from 'services/cms';

import GlobalStyle from 'styles/globalStyle';

const App = () => {
  const [cmsClient] = useState(createCmsClient());

  return (
    <CmsClientContext.Provider value={{ client: cmsClient }}>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </CmsClientContext.Provider>
  );
};

export default App;
