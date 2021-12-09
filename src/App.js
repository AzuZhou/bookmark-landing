import Layout from 'components/Layout';
import Home from 'pages/Home';

import GlobalStyle from 'styles/globalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default App;
