type ObjValueType<Obj extends object, Key extends keyof Obj> = Obj[Key];

export type TodoType = {
  id: number;
  createdAt: Date;
  done: boolean;
  description: string;
  title: string;
};

export type TodoIdType = ObjValueType<TodoType, 'id'>;

export type CreatedTodoType = Pick<TodoType, 'description' | 'title'>;

export type UpdatedTodoType = Pick<TodoType, 'description' | 'title' | 'done'>;

export type TodosStoreType = {
  todos: Array<TodoType>;
  isLoading: boolean;
};
