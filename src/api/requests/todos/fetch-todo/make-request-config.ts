import { IRequestParams } from '@mihanizm56/fetch-api';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { fetchTodosEndpoint } from '@/api/endpoints/todos';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (): IRequestParams => ({
  endpoint: fetchTodosEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
});
