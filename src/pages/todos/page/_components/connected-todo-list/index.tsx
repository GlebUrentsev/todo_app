import { ComponentType, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import {
  deleteTodoActionSaga,
  isTodosLoadingSelector,
  todosSelector,
} from '@/pages/todos/_redux/todos-module';
import { TodoItem } from './_components/todo-item';

type MapStateOutputType = {
  todos: ReturnType<typeof todosSelector>;
  isTodosLoading: ReturnType<typeof isTodosLoadingSelector>;
  deleteTodo: typeof deleteTodoActionSaga;
  updateTodo: typeof fetchFormManagerSagaAction;
};

type Props = MapStateOutputType;

export const Wrapper = memo(
  ({ todos, isTodosLoading, deleteTodo, updateTodo }: Props) => {
    if (!todos.length) {
      return <div>No todos</div>;
    }

    return (
      <>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            isTodosLoading={isTodosLoading}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
            todo={todo}
          />
        ))}
      </>
    );
  },
);

const mapStateToProps = (state) => ({
  todos: todosSelector(state),
  isTodosLoading: isTodosLoadingSelector(state),
});

const mapDispatchToProps = {
  deleteTodo: deleteTodoActionSaga,
  updateTodo: fetchFormManagerSagaAction,
};

export const ConnectedTodoList = compose<ComponentType<unknown>>(
  connect(mapStateToProps, mapDispatchToProps),
)(Wrapper);
