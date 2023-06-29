import pThrottle from 'p-throttle';

import { GraphQLClient } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphQLClient = new GraphQLClient(graphqlAPI);

const throttle = pThrottle({ limit: 10, interval: 1000 });

export const throttledRequest = throttle(async (query, variables) => {
  const result = await graphQLClient.request(query, variables);
  return result;
});
