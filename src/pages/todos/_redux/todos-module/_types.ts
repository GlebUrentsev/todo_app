type ObjValueType<Obj extends object, Key extends keyof Obj> = Obj[Key];

export type Todo = {
  id: number;
  createdAt: Date;
  done: boolean;
  description: string;
  title: string;
};

export type TodoIdType = ObjValueType<Todo, 'id'>;

export type CreatedTodoType = Pick<Todo, 'description' | 'title'>;

export type UpdatedTodoType = Pick<Todo, 'description' | 'title' | 'done'>;

export type TodosState = {
  todos: Array<Todo>;
  isLoading: boolean;
};
