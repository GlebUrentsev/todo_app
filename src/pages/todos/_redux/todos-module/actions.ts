import { IReduxBaseAction, IReduxAction } from '@mihanizm56/redux-core-modules';
import { Todo } from './_types';

const START_LOADING_TODOS_ACTION = 'START_LOADING_TODOS_ACTION';
export const startLoadingTodosAction: IReduxBaseAction<
  typeof START_LOADING_TODOS_ACTION
> = () => ({
  type: START_LOADING_TODOS_ACTION,
});
startLoadingTodosAction.type = START_LOADING_TODOS_ACTION;

const STOP_LOADING_TODOS_ACTION = 'STOP_LOADING_TODOS_ACTION';
export const stopLoadingTodosAction: IReduxBaseAction<
  typeof STOP_LOADING_TODOS_ACTION
> = () => ({
  type: STOP_LOADING_TODOS_ACTION,
});
stopLoadingTodosAction.type = STOP_LOADING_TODOS_ACTION;

const FETCH_TODOS_ACTION_SAGA = 'FETCH_TODOS_ACTION_SAGA';
export const fetchTodosActionSaga: IReduxBaseAction<
  typeof FETCH_TODOS_ACTION_SAGA
> = () => ({
  type: FETCH_TODOS_ACTION_SAGA,
});
fetchTodosActionSaga.type = FETCH_TODOS_ACTION_SAGA;

const FETCH_TODO_SUCCEEDED_ACTION = 'FETCH_TODO_SUCCEEDED_ACTION';
export const fetchTodoSucceededAction: IReduxAction<
  Array<Todo>,
  typeof FETCH_TODO_SUCCEEDED_ACTION
> = (payload) => ({
  type: FETCH_TODO_SUCCEEDED_ACTION,
  payload,
});
fetchTodoSucceededAction.type = FETCH_TODO_SUCCEEDED_ACTION;

const CREATE_TODO_SUCCEEDED_ACTION = 'CREATE_TODO_SUCCEEDED_ACTION';
export const createTodoSucceededAction: IReduxAction<
  Todo,
  typeof CREATE_TODO_SUCCEEDED_ACTION
> = (payload) => ({
  type: CREATE_TODO_SUCCEEDED_ACTION,
  payload,
});
createTodoSucceededAction.type = CREATE_TODO_SUCCEEDED_ACTION;

const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION';
export const deleteTodoSucceededAction: IReduxAction<
  number,
  typeof DELETE_TODO_ACTION
> = (payload) => ({
  type: DELETE_TODO_ACTION,
  payload,
});
deleteTodoSucceededAction.type = DELETE_TODO_ACTION;

const DELETE_TODO_ACTION_SAGA = 'DELETE_TODO_ACTION_SAGA';
export const deleteTodoActionSaga: IReduxAction<
  { id: number },
  typeof DELETE_TODO_ACTION_SAGA
> = (payload) => ({
  type: DELETE_TODO_ACTION_SAGA,
  payload,
});
deleteTodoActionSaga.type = DELETE_TODO_ACTION_SAGA;

const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION';
export const updateTodoSucceededAction: IReduxAction<
  Todo,
  typeof UPDATE_TODO_ACTION
> = (payload) => ({
  type: UPDATE_TODO_ACTION,
  payload,
});
updateTodoSucceededAction.type = UPDATE_TODO_ACTION;
