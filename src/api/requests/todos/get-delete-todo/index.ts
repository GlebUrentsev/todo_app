import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from './make-request-config';

export const getDeleteTodoRequest = (id: number): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(id));
