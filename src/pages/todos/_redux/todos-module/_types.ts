export type Todo = {
  id: number;
  createdAt: Date;
  done: boolean;
  description: string;
};

export type TodosState = {
  todos: Array<Todo>;
  isLoading: boolean;
};

export type FormCreateTodoType = {
  description: string;
};

export type FormUpdateTodoType = FormCreateTodoType & {
  done: boolean;
};
