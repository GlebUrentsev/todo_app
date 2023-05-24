import { memo, MutableRefObject } from 'react';
import { Form, Field } from 'react-final-form';
import { FormSimpleInput } from '@wildberries/ui-kit';
import { FormApi } from 'final-form';
import { FormCreateTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { validateTodoForm } from '../../../_utils/validations';

type PropsType = {
  onSubmit: (values: any) => void;
  formRef: MutableRefObject<FormApi<FormCreateTodoType>>;
  isLoading: boolean;
};

export const CreateTodoFormView = memo(
  ({ onSubmit, formRef, isLoading }: PropsType) => {
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
          formRef.current = form;

          return (
            <>
              <form onSubmit={handleSubmit}>
                <Field
                  autoComplete="off"
                  component={FormSimpleInput}
                  description={
                    touched.description &&
                    errors.description && <span>{errors.description}</span>
                  }
                  id="todo"
                  label="Создать задачу"
                  name="description"
                  placeholder="Название задачи..."
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
