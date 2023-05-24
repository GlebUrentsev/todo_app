import { memo, MutableRefObject } from 'react';
import { Form, Field } from 'react-final-form';
import { FormSimpleInput, Text } from '@wildberries/ui-kit';
import { FormApi } from 'final-form';
import { CreatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { validateTodoForm } from '../../../../_utils/validations';

type PropsType = {
  onSubmit: (values: any) => void;
  formApiRef: MutableRefObject<FormApi<CreatedTodoType>>;
  isLoading: boolean;
};

export const CreateTodoFormView = memo(
  ({ onSubmit, formApiRef, isLoading }: PropsType) => {
    return (
      <Form
        onSubmit={onSubmit}
        render={({
          handleSubmit,
          errors,
          touched,
          form,
          submitting,
          pristine,
          invalid,
        }) => {
          // eslint-disable-next-line no-param-reassign
          formApiRef.current = form;

          return (
            <>
              <form onSubmit={handleSubmit}>
                <Text size="h3-bold" text="Создать новую задачу" />
                <Field
                  autoComplete="off"
                  component={FormSimpleInput}
                  externalErrorMessage={
                    touched.title && errors.title && <span>{errors.title}</span>
                  }
                  id="todo-title"
                  label="Заголовок"
                  name="title"
                  placeholder="Впишите заголовок"
                  required
                  type="text"
                />
                <Field
                  autoComplete="off"
                  component={FormSimpleInput}
                  externalErrorMessage={
                    touched.description &&
                    errors.description && <span>{errors.description}</span>
                  }
                  id="todo-description"
                  label="Название"
                  name="description"
                  placeholder="Впишите название"
                  required
                  type="text"
                />
                <button
                  disabled={submitting || pristine || isLoading || invalid}
                  type="submit"
                >
                  Создать
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
