import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { TodoType } from '@/pages/todos/_redux/todos-module/_types';
import { makeRequestConfig } from './make-request-config';

export const updateTodoRequest = (updatedData: TodoType): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(updatedData));
