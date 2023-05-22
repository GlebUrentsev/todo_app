import { RestRequest, IResponse } from '@mihanizm56/fetch-api';
import { todosListEndpoint } from '@/api/endpoints/todos';
import { todoSchema } from './response-schema';

export const getTodos = (): Promise<IResponse> =>
  new RestRequest().getRequest({
    endpoint: todosListEndpoint,
    responseSchema: todoSchema,
  });
