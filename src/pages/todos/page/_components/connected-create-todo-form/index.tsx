import { ComponentType, memo, useCallback, useRef } from 'react';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormApi } from 'final-form';
import { isTodosLoadingSelector } from '@/pages/todos/_redux/todos-module';
import { FormCreateTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { CreateTodoFormView } from './_components/create-todo-form-view';
import { getCreateTodoConfig } from './_utils/get-create-todo-config';

type MapStateOutputType = {
  isTodosLoading: ReturnType<typeof isTodosLoadingSelector>;
  createTodo: typeof fetchFormManagerSagaAction;
};

type PropsType = MapStateOutputType;

const Wrapper = memo(({ isTodosLoading, createTodo }: PropsType) => {
  const formRef = useRef<FormApi<FormCreateTodoType>>(null);

  const handleSubmit = useCallback(
    (values: FormCreateTodoType) => {
      createTodo(
        getCreateTodoConfig({
          formRef,
          values,
        }),
      );
    },
    [createTodo],
  );

  return (
    <CreateTodoFormView
      formRef={formRef}
      isLoading={isTodosLoading}
      onSubmit={handleSubmit}
    />
  );
});

const mapStateToProps = (state) => ({
  isTodosLoading: isTodosLoadingSelector(state),
});

const mapDispatchToProps = {
  createTodo: fetchFormManagerSagaAction,
};

export const ConnectedCreateTodoForm = compose<ComponentType<unknown>>(
  connect(mapStateToProps, mapDispatchToProps),
)(Wrapper);
