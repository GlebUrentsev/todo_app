import { TodosState } from './_types';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
  fetchTodoSucceededAction,
} from './actions';

type ActionsType =
  | ReturnType<typeof startLoadingTodosAction>
  | ReturnType<typeof stopLoadingTodosAction>
  | ReturnType<typeof fetchTodoSucceededAction>;

export const initialTodosState: TodosState = {
  todos: [],
  isLoading: false,
};

const reducer = (
  state: TodosState = initialTodosState,
  action: ActionsType,
) => {
  switch (action.type) {
    case fetchTodoSucceededAction.type:
      return { ...state, todos: action.payload };

    case startLoadingTodosAction.type:
      return { ...state, isLoading: true };

    case stopLoadingTodosAction.type:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default reducer;
