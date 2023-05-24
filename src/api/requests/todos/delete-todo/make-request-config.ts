import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { deleteTodoEndpoint } from '@/api/endpoints/todos';
import { TodoIdType } from '@/pages/todos/_redux/todos-module/_types';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (deletedId: TodoIdType) => ({
  body: {
    deletedId,
  },
  endpoint: deleteTodoEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
});
