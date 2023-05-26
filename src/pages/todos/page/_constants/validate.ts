import {
  composeValidators,
  SimpleValidator,
  ValidatorReturnsType,
} from '@mihanizm56/validators';
import i18next from 'i18next';
import { TodoType } from '../../_redux/todos-module/_types';
import { TODO_LIST_PAGE_TRANSLATES } from './translations';

const simpleValidator = new SimpleValidator();

export type formValidationsType = Partial<
  Record<keyof TodoType, ValidatorReturnsType>
>;

export const TODO_FORM_VALIDATIONS = {
  title: composeValidators([
    simpleValidator.requiredValidator(
      i18next.t(TODO_LIST_PAGE_TRANSLATES.titleRequired),
    ),
  ]),
  description: composeValidators([
    simpleValidator.requiredValidator(
      i18next.t(TODO_LIST_PAGE_TRANSLATES.descriptionRequired),
    ),
  ]),
};
