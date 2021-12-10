import { createClient } from 'contentful';

const createCmsClient = () =>
  createClient({
    space: '84wwkpwxe46m',
    environment: 'master',
    accessToken: 'TvnuNY1Uusfl3U55oKlDrDXL1ivmbhnhLo-63tAu4bI'
  });

export { createCmsClient };
