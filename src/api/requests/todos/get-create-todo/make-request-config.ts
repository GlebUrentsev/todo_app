import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { createTodoEndpoint } from '@/api/endpoints/todos';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (description: string) => ({
  body: {
    todoData: {
      description,
    },
  },
  endpoint: createTodoEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
});
