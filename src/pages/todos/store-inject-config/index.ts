import { StoreInjectConfig } from '@mihanizm56/redux-core-modules/dist/containers/redux-store-loader/types';
import { Dispatch } from 'redux';
import { batchActions } from 'redux-batched-actions';
import reducerUI, {
  MODULE_REDUCER_NAME as reducerUIName,
} from '@/_redux/ui-module';
import { fetchTodosActionSaga } from '../_redux/todos-module/actions';
import todosReducer from '../_redux/todos-module/reducer';
import {
  DELETE_TODO_WATCHER_SAGA_NAME,
  FETCH_TODOS_WATCHER_SAGA_NAME,
  deleteTodoSagaWatcher,
  fetchTodosSagaWatcher,
} from '../_redux/todos-module/sagas/todos';
import { TODOS_REDUCER_NAME } from '../_redux/todos-module';

export const storeInjectConfig: StoreInjectConfig = {
  reducersToInject: [
    {
      name: reducerUIName,
      reducer: reducerUI,
    },
    {
      name: TODOS_REDUCER_NAME,
      reducer: todosReducer,
    },
  ],
  sagasToInject: [
    {
      name: FETCH_TODOS_WATCHER_SAGA_NAME,
      saga: fetchTodosSagaWatcher,
    },
    {
      name: DELETE_TODO_WATCHER_SAGA_NAME,
      saga: deleteTodoSagaWatcher,
    },
  ],

  additionalConfig: {
    callbackOnMount: (dispatch: Dispatch) => {
      dispatch(batchActions([fetchTodosActionSaga()]));
    },
  },
};
