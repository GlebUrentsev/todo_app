import { createSelector } from 'reselect';
import { TODOS_REDUCER_NAME } from './_constants';
import { TodosState } from './_types';
import { initialTodosState } from './reducer';

export const todosStoreSelector = (store) =>
  store[TODOS_REDUCER_NAME] || initialTodosState;

export const todosSelector = createSelector(
  todosStoreSelector,
  ({ todos }: TodosState) => todos,
);

export const isTodosLoadingSelector = createSelector(
  todosStoreSelector,
  ({ isLoading }: TodosState) => isLoading,
);
