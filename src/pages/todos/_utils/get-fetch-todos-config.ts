import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { fetchTodosRequest } from '@/api/requests/todos/fetch-todo';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
  fetchTodoSuccessAction,
} from '../_redux/todos-module';
import { TODO_LIST_PAGE_TRANSLATES } from '../page/_constants/translations';

export const getFetchTodosConfig = (): InitLoadManagerRequestOptionsType => ({
  request: fetchTodosRequest,
  loadingStartAction: startLoadingTodosAction,
  loadingStopAction: stopLoadingTodosAction,
  actionSuccess: (data) => fetchTodoSuccessAction(data.todos),
  showErrorNotification: true,
  titleMessageError: i18next.t(TODO_LIST_PAGE_TRANSLATES.fetchTodoError),
});
