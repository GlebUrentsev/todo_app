import { takeLatest } from 'redux-saga/effects';
import { fetchTodosActionSaga, deleteTodoActionSaga } from '../../actions';
import {
  fetchTodosSagaWorker,
  deleteTodoSagaWorker,
} from './get-todo-worker-saga';

export const FETCH_TODOS_WATCHER_SAGA_NAME = 'FETCH_TODOS_WATCHER_SAGA_NAME';

export function* fetchTodosSagaWatcher() {
  yield takeLatest(fetchTodosActionSaga.type, fetchTodosSagaWorker);
}

export const DELETE_TODO_WATCHER_SAGA_NAME = 'DELETE_TODO_WATCHER_SAGA_NAME';

export function* deleteTodoSagaWatcher() {
  yield takeLatest(deleteTodoActionSaga.type, deleteTodoSagaWorker);
}
