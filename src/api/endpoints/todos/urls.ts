import { isProd } from '@/_utils/env';

export const ENDPOINT_ORIGIN = isProd()
  ? 'http://some-cool-prod-url'
  : 'http://127.0.0.1:8081';

export const ENDPOINT_TODOS_PATTERN = '/todos';

export const ENDPOINT_CREATE_TODO_PATTERN = `${ENDPOINT_TODOS_PATTERN}/create`;

export const ENDPOINT_DELETE_TODO_PATTERN = `${ENDPOINT_TODOS_PATTERN}/delete`;

export const ENDPOINT_UPDATE_TODO_PATTERN = `${ENDPOINT_TODOS_PATTERN}/update`;
