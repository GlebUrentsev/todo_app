import { memo, useCallback, useState } from 'react';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import { deleteTodoActionSaga } from '@/pages/todos/_redux/todos-module';
import { Todo } from '@/pages/todos/_redux/todos-module/_types';
import { getUpdateTodoConfig } from '@/pages/todos/_utils/get-update-todo-config';
import { TodoItemUpdateForm } from './_components/todo-item-form';

type Props = {
  todo: Todo;
  onDelete: typeof deleteTodoActionSaga;
  onUpdate: typeof fetchFormManagerSagaAction;
  isTodosLoading: boolean;
};

export const TodoItem = memo(
  ({ todo, onDelete, onUpdate, isTodosLoading }: Props) => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditing = useCallback(() => {
      setIsEditing((prev) => !prev);
    }, []);

    const candelEdit = useCallback(() => {
      setIsEditing(false);
    }, []);

    const handleSubmit = useCallback(
      (values) => {
        const updatedTodo = {
          id: todo.id,
          ...values,
        };
        onUpdate(getUpdateTodoConfig(updatedTodo));
        candelEdit();
      },
      [candelEdit, onUpdate, todo.id],
    );

    if (isEditing) {
      return (
        <TodoItemUpdateForm
          description={todo.description}
          done={todo.done}
          isLoading={isTodosLoading}
          onCancel={candelEdit}
          onSubmit={handleSubmit}
          title={todo.title}
        />
      );
    }

    return (
      <>
        <div key={todo.id}>
          {new Date(todo.createdAt).toLocaleDateString('ru-RU')} {todo.title}{' '}
          {todo.description} {todo.done ? 'Завершена' : 'Не завершена'}
          <button onClick={toggleEditing} type="button">
            Edit
          </button>{' '}
          <button onClick={() => onDelete({ id: todo.id })} type="button">
            Delete
          </button>
        </div>
      </>
    );
  },
);
