import { memo, useCallback, useState } from 'react';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import classnames from 'classnames/bind';
import {
  ButtonLink,
  Text,
  BasicClearIcon,
  BasicPencilEditIcon,
  BasicCheckMarkIcon,
} from '@wildberries/ui-kit';
import i18next from 'i18next';
import { deleteTodoActionSaga } from '@/pages/todos/_redux/todos-module';
import {
  UpdatedTodoType,
  TodoType,
} from '@/pages/todos/_redux/todos-module/_types';
import { getUpdateTodoConfig } from '@/pages/todos/_utils/get-update-todo-config';
import { TODO_LIST_PAGE_TRANSLATES } from '@/pages/todos/page/_constants/translations';
import { TodoItemForm } from './_components/todo-item-form';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  todo: TodoType;
  onDelete: typeof deleteTodoActionSaga;
  onUpdate: typeof fetchFormManagerSagaAction;
  isTodosLoading: boolean;
};

const BLOCK_NAME = 'TodoItem';

export const TodoItem = memo(
  ({ todo, onDelete, onUpdate, isTodosLoading }: PropsType) => {
    const [isEditing, setIsEditing] = useState(false);

    const formattedTodoDate = new Date(todo.createdAt).toLocaleDateString();

    const toggleEditing = () => {
      setIsEditing((prev) => !prev);
    };

    const candelEdit = useCallback(() => {
      setIsEditing(false);
    }, []);

    const handleSubmit = useCallback(
      (values: UpdatedTodoType) => {
        const updatedTodo = {
          id: todo.id,
          ...values,
        };
        onUpdate(getUpdateTodoConfig(updatedTodo));
        candelEdit();
      },
      [candelEdit, onUpdate, todo.id],
    );

    const handleDeleteClick = () => {
      onDelete({ id: todo.id });
    };

    if (isEditing) {
      return (
        <TodoItemForm
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
      <div key={todo.id} className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__title`)}>
          <Text isUpperCase size="h3-bold" text={todo.title} />
          <Text color="blue" text={formattedTodoDate} />
        </div>
        <Text
          text={i18next.t(TODO_LIST_PAGE_TRANSLATES.descriptionWithText, {
            text: todo.description,
          })}
        />
        <div className={cn(`${BLOCK_NAME}__controls`)}>
          <ButtonLink
            onClick={toggleEditing}
            rightIcon={BasicPencilEditIcon}
            size="small"
            text={i18next.t(TODO_LIST_PAGE_TRANSLATES.updateButton)}
            type="submit"
            variant="only-icon"
          />
          <ButtonLink
            onClick={handleDeleteClick}
            rightIcon={BasicClearIcon}
            size="small"
            text={i18next.t(TODO_LIST_PAGE_TRANSLATES.cancelButton)}
            type="submit"
            variant="only-icon"
          />
        </div>
        {todo.done && (
          <div className={cn(`${BLOCK_NAME}__status`)}>
            <Text text={i18next.t(TODO_LIST_PAGE_TRANSLATES.doneStatus)} />
            <BasicCheckMarkIcon colorType="cyanColor" />
          </div>
        )}
      </div>
    );
  },
);
