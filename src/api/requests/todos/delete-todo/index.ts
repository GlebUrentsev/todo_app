import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { TodoIdType } from '@/pages/todos/_redux/todos-module/_types';
import { makeRequestConfig } from './make-request-config';

export const deleteTodoRequest = (id: TodoIdType): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(id));
