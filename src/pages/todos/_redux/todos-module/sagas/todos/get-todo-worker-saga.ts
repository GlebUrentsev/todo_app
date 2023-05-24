import { call, put } from 'redux-saga/effects';
import { setModalAction } from '@wildberries/notifications';
import { getTodosRequest } from '@/api/requests/todos/get-fetch-todo';
import { getDeleteTodoRequest } from '@/api/requests/todos/get-delete-todo';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
  fetchTodoSucceededAction,
  deleteTodoSucceededAction,
} from '../../actions';

export function* fetchTodosSagaWorker() {
  try {
    yield put(startLoadingTodosAction());
    const { data, error, errorText } = yield call(getTodosRequest);

    if (error) {
      throw new Error(errorText);
    }

    yield put(fetchTodoSucceededAction(data.todos));
  } catch (error) {
    console.error('Error in fetchTodosSagaWorker', error.message);

    yield put(
      setModalAction({
        status: 'error',
        title: 'Error in fetchTodosSagaWorker',
        text: error.message,
      }),
    );
  } finally {
    yield put(stopLoadingTodosAction());
  }
}

export function* deleteTodoSagaWorker(action) {
  try {
    const todoId = action.payload.id;
    yield put(startLoadingTodosAction());

    const { error, errorText } = yield call(getDeleteTodoRequest, todoId);
    if (error) {
      throw new Error(errorText);
    }

    yield put(deleteTodoSucceededAction(todoId));
    yield put(
      setModalAction({
        status: 'success',
        title: 'Удалено',
        text: 'Задача успешно удалена',
        customHoldTimeout: 2500,
      }),
    );
  } catch (error) {
    console.error('Error in deleteTodoSagaWorker', error.message);

    yield put(
      setModalAction({
        status: 'error',
        title: 'Error in deleteTodoSagaWorker',
        text: error.message,
      }),
    );
  } finally {
    yield put(stopLoadingTodosAction());
  }
}
