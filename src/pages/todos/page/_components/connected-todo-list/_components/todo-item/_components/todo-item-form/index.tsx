import { memo } from 'react';
import { Form, Field } from 'react-final-form';
import { ButtonLink, FormCheckbox, FormSimpleInput } from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import i18next from 'i18next';
import { UpdatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { TODO_FORM_VALIDATIONS } from '@/pages/todos/page/_constants/validate';
import { TODO_LIST_PAGE_TRANSLATES } from '@/pages/todos/page/_constants/translations';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  onSubmit: (values: UpdatedTodoType) => void;
  onCancel: () => void;
  isLoading: boolean;
  description: string;
  done: boolean;
  title: string;
};

const BLOCK_NAME = 'TodoItemForm';

export const TodoItemForm = memo(
  ({ onSubmit, onCancel, isLoading, description, title, done }: PropsType) => {
    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine, invalid }) => {
          const isSubmitDisabled =
            submitting || pristine || isLoading || invalid;

          return (
            <form className={cn(BLOCK_NAME)} onSubmit={handleSubmit}>
              <Field
                autoComplete="off"
                component={FormSimpleInput}
                id="todo-title"
                initialValue={title}
                label={i18next.t(TODO_LIST_PAGE_TRANSLATES.changeTitle)}
                name="title"
                placeholder={i18next.t(TODO_LIST_PAGE_TRANSLATES.newTodoTitle)}
                required
                type="text"
                validate={TODO_FORM_VALIDATIONS.title}
              />
              <Field
                autoComplete="off"
                component={FormSimpleInput}
                id="todo-description"
                initialValue={description}
                label={i18next.t(TODO_LIST_PAGE_TRANSLATES.changeDescription)}
                name="description"
                placeholder={i18next.t(
                  TODO_LIST_PAGE_TRANSLATES.newTodoDescription,
                )}
                required
                type="text"
                validate={TODO_FORM_VALIDATIONS.description}
              />
              <Field
                autoComplete="off"
                component={FormCheckbox}
                disable={false}
                id="todo-done"
                initialValue={done}
                label={i18next.t(TODO_LIST_PAGE_TRANSLATES.todoDone)}
                name="done"
                type="checkbox"
              />
              <ButtonLink
                disabled={isSubmitDisabled}
                isLoading={isLoading}
                size="big"
                text={i18next.t(TODO_LIST_PAGE_TRANSLATES.updateButton)}
                type="submit"
                variant="remove"
              />

              <ButtonLink
                isLoading={isLoading}
                onClick={onCancel}
                size="big"
                text={i18next.t(TODO_LIST_PAGE_TRANSLATES.cancelButton)}
                type="submit"
                variant="add"
              />
            </form>
          );
        }}
      />
    );
  },
);
