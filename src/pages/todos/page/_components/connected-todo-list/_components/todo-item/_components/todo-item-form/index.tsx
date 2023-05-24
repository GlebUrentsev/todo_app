import { memo } from 'react';
import { Form, Field } from 'react-final-form';
import { FormCheckbox, FormSimpleInput } from '@wildberries/ui-kit';
import { validateTodoForm } from '@/pages/todos/page/_components/_utils/validations';

type PropsType = {
  onSubmit: (values: any) => void;
  onCancel: () => void;
  isLoading: boolean;
  description: string;
  done: boolean;
};

export const TodoItemUpdateForm = memo(
  ({ onSubmit, onCancel, isLoading, description, done }: PropsType) => {
    return (
      <Form
        onSubmit={onSubmit}
        render={({
          handleSubmit,
          errors,
          touched,
          submitting,
          pristine,
          invalid,
        }) => {
          return (
            <>
              <form onSubmit={handleSubmit}>
                <Field
                  autoComplete="off"
                  component={FormSimpleInput}
                  externalErrorMessage={
                    touched.description &&
                    errors.description && <span>{errors.description}</span>
                  }
                  id="todo"
                  initialValue={description}
                  label="Изменить задачу"
                  name="description"
                  placeholder="Новое название задачи"
                  required
                  type="text"
                />
                <Field
                  autoComplete="off"
                  component={FormCheckbox}
                  disable={false}
                  externalErrorMessage={
                    touched.done && errors.done && <span>{errors.done}</span>
                  }
                  id="todo-checked"
                  initialValue={done}
                  label="Задача выполнена"
                  name="done"
                  type="checkbox"
                />
                <button
                  disabled={submitting || pristine || isLoading || invalid}
                  type="submit"
                >
                  Изменить
                </button>
                <button onClick={onCancel} type="button">
                  Отмена
                </button>
              </form>
            </>
          );
        }}
        validate={validateTodoForm}
      />
    );
  },
);
