import { isProd } from '@/_utils/env';

const getEndpoint = () =>
  isProd() ? 'http://some-cool-prod-url' : 'http://127.0.0.1:8081';

export const todosListEndpoint = `${getEndpoint()}/todos`;
