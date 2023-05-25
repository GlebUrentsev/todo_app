import { IRequestParams } from '@mihanizm56/fetch-api';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { createTodoEndpoint } from '@/api/endpoints/todos';
import { CreatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (
  createdTodo: CreatedTodoType,
): IRequestParams => ({
  body: createdTodo,
  endpoint: createTodoEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
});
