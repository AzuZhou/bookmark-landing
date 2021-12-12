import { BASE_URL, QUERY } from './api';

const { NEXT_PUBLIC_SPACE_ID, NEXT_PUBLIC_ACCESS_TOKEN } = process.env;
const API_URL = `${BASE_URL}/content/v1/spaces/${NEXT_PUBLIC_SPACE_ID}/environments/master`;

const fetchContent = async () => {
  return await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${NEXT_PUBLIC_ACCESS_TOKEN}`
    },
    body: JSON.stringify({ query: QUERY })
  }).then((response) => response.json());
};

export { fetchContent };
