import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import { fetchTodosRequest } from '@/api/requests/todos/fetch-todo';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
  fetchTodoSucceededAction,
} from '../_redux/todos-module';

export const getFetchTodosConfig = (): InitLoadManagerRequestOptionsType => ({
  request: () => fetchTodosRequest(),
  loadingStartAction: () => startLoadingTodosAction(),
  loadingStopAction: () => stopLoadingTodosAction(),
  actionSuccess: (data) => fetchTodoSucceededAction(data.todos),
  showErrorNotification: true,
  titleMessageError: 'Ошибка при получении задач',
});
