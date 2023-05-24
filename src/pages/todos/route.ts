import { I18N_DICTIONARY } from '@/_assets/i18next/dictionary';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';

export default {
  name: 'todo-list',
  path: '/todo-list',
  loadAction: () => import('./index'),
  i18n: {
    namespaces: [APP_NAMESPACE],
    version: 'appVersion',
    localDictionaryFiles: I18N_DICTIONARY,
  },
};
