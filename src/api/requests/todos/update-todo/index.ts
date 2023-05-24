import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { Todo } from '@/pages/todos/_redux/todos-module/_types';
import { makeRequestConfig } from './make-request-config';

export const updateTodoRequest = (updatedData: Todo): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(updatedData));
