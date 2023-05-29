import {
  FormManagerType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import { FormApi } from 'final-form';
import i18next from 'i18next';
import { createTodoRequest } from '@/api/requests/todos/create-todo';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
} from '@/pages/todos/_redux/todos-module';
import { CreatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { resetFinalFormFields } from '../page/_utils/form';
import { TODO_LIST_PAGE_TRANSLATES } from '../page/_constants/translations';
import { getFetchTodosConfig } from './get-fetch-todos-config';

type ParamsType = {
  values: CreatedTodoType;
  formApi: FormApi<CreatedTodoType>;
};

export const getCreateTodoConfig = ({
  values,
  formApi,
}: ParamsType): FormManagerType => ({
  formValues: values,
  loadingStartAction: startLoadingTodosAction,
  loadingStopAction: stopLoadingTodosAction,
  showNotification: true,
  formRequest: ({ body }) => createTodoRequest(body),
  textMessageSuccess: i18next.t(TODO_LIST_PAGE_TRANSLATES.createTodoSucces),
  titleMessageError: i18next.t(TODO_LIST_PAGE_TRANSLATES.createTodoError),
  formSuccessAction: () => {
    resetFinalFormFields(values, formApi);

    return initLoadManagerActionSaga({
      requestConfigList: [getFetchTodosConfig()],
    });
  },
});
