import { TodosState } from './_types';
import {
  startLoadingTodosAction,
  stopLoadingTodosAction,
  fetchTodoSucceededAction,
  deleteTodoSucceededAction,
  updateTodoSucceededAction,
  createTodoSucceededAction,
} from './actions';

type ActionsType =
  | ReturnType<typeof startLoadingTodosAction>
  | ReturnType<typeof stopLoadingTodosAction>
  | ReturnType<typeof fetchTodoSucceededAction>
  | ReturnType<typeof deleteTodoSucceededAction>
  | ReturnType<typeof updateTodoSucceededAction>
  | ReturnType<typeof createTodoSucceededAction>;

export const initialTodosState: TodosState = {
  todos: [],
  isLoading: false,
};

const reducer = (
  state: TodosState = initialTodosState,
  action: ActionsType,
) => {
  switch (action.type) {
    case updateTodoSucceededAction.type:
      return {
        ...state,
        // можно порефакторить, чтобы бекенд отвечал не массивом todo, а объектом todoId-todo
        // тогда уйдет лишняя map-а
        todos: state.todos.map((todo) => {
          if (action.payload.id === todo.id) {
            return {
              ...todo,
              ...action.payload,
            };
          }

          return todo;
        }),
      };

    case createTodoSucceededAction.type:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case deleteTodoSucceededAction.type:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

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
