import { FormApi } from 'final-form';
import { FormCreateTodoType } from '@/pages/todos/_redux/todos-module/_types';

const getKeys = Object.keys as <T>(obj: T) => Array<keyof T>;

export const resetFinalFormFields = (
  values: FormCreateTodoType,
  form?: FormApi<FormCreateTodoType>,
) => {
  if (form) {
    getKeys(values).forEach((key) => {
      form.change(key, '');
      form.resetFieldState(key);
    });
  }
};
