import { FormManagerType } from '@mihanizm56/redux-core-modules';
import { FormApi } from 'final-form';
import { getCreateTodoRequest } from '@/api/requests/todos/get-create-todo';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
  createTodoSucceededAction,
} from '@/pages/todos/_redux/todos-module';
import { FormCreateTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { resetFinalFormFields } from './form';

type Params = {
  values: FormCreateTodoType;
  formRef: React.MutableRefObject<FormApi<FormCreateTodoType>>;
};

export const getCreateTodoConfig = ({
  values,
  formRef,
}: Params): FormManagerType => ({
  formValues: values.description,
  loadingStartAction: () => startLoadingTodosAction(),
  loadingStopAction: () => stopLoadingTodosAction(),
  showNotification: true,
  formRequest: ({ body }) => getCreateTodoRequest(body),
  textMessageSuccess: 'Задача успешно создана',
  formSuccessAction: (payload) => {
    resetFinalFormFields(values, formRef.current);

    return createTodoSucceededAction(payload);
  },
});
