import { Todo } from '@/pages/todos/_redux/todos-module/_types';

const isMissing = (value: unknown) =>
  !value || (typeof value === 'string' && value.trim() === '');

const required =
  (message = 'Value is missing') =>
  (value) => {
    if (isMissing(value)) {
      return message;
    }
  };

export const validateTodoForm = ({ description, title }: Partial<Todo>) => ({
  description: required('Требуется описание задачи')(description),
  title: required('Требуется заголовок задачи')(title),
});
