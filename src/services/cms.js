import { createClient } from 'contentful';

const createCmsClient = () => {
  console.log(process.env.REACT_APP_SPACE_ID);
  return createClient({
    space: process.env.REACT_APP_SPACE_ID,
    environment: 'master',
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  });
};

export { createCmsClient };
