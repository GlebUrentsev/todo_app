import { FormApi } from 'final-form';

const getKeys = Object.keys as <T>(obj: T) => Array<keyof T>;

export const resetFinalFormFields = (
  values: Record<string, unknown>,
  formApi?: FormApi<any>,
) => {
  if (formApi) {
    getKeys(values).forEach((key) => {
      formApi.change(key, '');
      formApi.resetFieldState(key);
    });
  }
};
