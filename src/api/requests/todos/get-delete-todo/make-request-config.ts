import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { deleteTodoEndpoint } from '@/api/endpoints/todos';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (id: number) => ({
  body: {
    deletedId: id,
  },
  endpoint: deleteTodoEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
});
