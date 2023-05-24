import { FormCreateTodoType } from '@/pages/todos/_redux/todos-module/_types';

const isMissing = (value: unknown) =>
  !value || (typeof value === 'string' && value.trim() === '');

const required =
  (message = 'Value is missing') =>
  (value) => {
    if (isMissing(value)) {
      return message;
    }
  };

export const validateTodoForm = ({
  description,
}: Partial<FormCreateTodoType>) => ({
  description: required()(description),
});
