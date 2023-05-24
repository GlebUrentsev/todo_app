import { ComponentType, memo, useCallback, useRef } from 'react';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormApi } from 'final-form';
import { isTodosLoadingSelector } from '@/pages/todos/_redux/todos-module';
import { CreatedTodoType } from '@/pages/todos/_redux/todos-module/_types';
import { getCreateTodoConfig } from '@/pages/todos/_utils/get-create-todo-config';
import { CreateTodoFormView } from './_components/create-todo-form-view';

type MapStateOutputType = {
  isTodosLoading: ReturnType<typeof isTodosLoadingSelector>;
  createTodo: typeof fetchFormManagerSagaAction;
};

type PropsType = MapStateOutputType;

const Wrapper = memo(({ isTodosLoading, createTodo }: PropsType) => {
  const formApiRef = useRef<FormApi<CreatedTodoType>>(null);

  const handleSubmit = useCallback(
    (values: CreatedTodoType) => {
      createTodo(
        getCreateTodoConfig({
          formApi: formApiRef.current,
          values,
        }),
      );
    },
    [createTodo],
  );

  return (
    <CreateTodoFormView
      formApiRef={formApiRef}
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
