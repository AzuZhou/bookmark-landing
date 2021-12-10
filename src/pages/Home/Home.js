import { useState, useEffect, useContext } from 'react';

import Hero from 'components/Hero';

import { CmsClientContext } from 'context/CmsClientContext';
import { Main } from 'styles/styled';

// const PAGE_ENTRY_ID = '63qo1mKjZ1QZIfKzoCLPYa';

const Home = () => {
  const { client } = useContext(CmsClientContext);
  const [page, setPage] = useState();
  // console.log('page: ', page);

  useEffect(() => {
    client.getEntries({ content_type: 'page' }).then((entries) => {
      setPage(entries);
    });
  }, [client]);

  if (!page) return null;

  return (
    <Main>
      <Hero client={client} fields={page.items[0].fields.mainHero.fields} />
    </Main>
  );
};

export default Home;
