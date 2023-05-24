import { FormManagerType } from '@mihanizm56/redux-core-modules';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
  updateTodoSucceededAction,
} from '@/pages/todos/_redux/todos-module';
import { FormCreateTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { getUpdateTodoRequest } from '@/api/requests/todos/get-update-todo';

type Params = {
  values: FormCreateTodoType;
};

export const getUpdateTodoConfig = (updatedData: Params): FormManagerType => {
  return {
    formValues: {
      ...updatedData,
    },
    loadingStartAction: () => startLoadingTodosAction(),
    loadingStopAction: () => stopLoadingTodosAction(),
    showNotification: true,
    formRequest: ({ body }) => getUpdateTodoRequest(body),
    textMessageSuccess: 'Задача успешно изменена',
    formSuccessAction: (payload) => updateTodoSucceededAction(payload),
  };
};
