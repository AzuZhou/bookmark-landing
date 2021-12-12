import Layout from 'components/Layout';
import Hero from 'components/Hero';

import { ContentContext } from 'context/ContentContext';
import { fetchContent } from 'services/cms';

import { Main } from 'styles/styled';

const Home = ({ content: { page, settings } = {} }) => {
  return (
    <ContentContext.Provider value={{ page, settings }}>
      <Layout>
        <Main>
          <Hero />
        </Main>
      </Layout>
    </ContentContext.Provider>
  );
};

export async function getStaticProps() {
  const res = await fetchContent();
  const content = res?.data ?? {};

  return {
    props: {
      content
    },
    revalidate: 10
  };
}

export default Home;
