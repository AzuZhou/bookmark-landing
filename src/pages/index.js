import { useRouter } from 'next/router';

import Layout from 'components/Layout';
import Hero from 'components/Hero';
import Features from 'components/Features';
import Extensions from 'components/Extensions';
import Faqs from 'components/Faqs';
import Newsletter from 'components/Newsletter';
import Loader from 'components/shared/Loader';

import { ContentContext } from 'context/ContentContext';
import { fetchContent } from 'services/cms';

import { Main } from 'styles/styled';

const Home = ({ content: { page, settings } = {} }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <ContentContext.Provider value={{ page, settings }}>
      <Layout>
        <Main>
          <Hero />
          <Features />
          <Extensions />
          <Faqs />
          <Newsletter />
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
    revalidate: 60
  };
}

export default Home;
