import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { updateTodoEndpoint } from '@/api/endpoints/todos';
import { UpdatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (updatedData: UpdatedTodoType) => ({
  body: {
    ...updatedData,
  },
  endpoint: updateTodoEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
});
