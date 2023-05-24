const { todosModel } = require('../../models/todos');

const deleteTodoController = async (req, res) => {
  const { deletedId } = req.body;

  const todos = await todosModel.value();

  const foundTodo = todos.find((todo) => todo.id === deletedId);

  if (!foundTodo) {
    res.status(200).json({
      jsonrpc: '2.0',
      error: {
        code: 404,
        message: 'todo doesnt exist',
      },
      errorText: '',
      data: {},
      additionalErrors: null,
    });

    return;
  }

  await todosModel.remove({ id: deletedId }).write();

  res.status(200).json({
    jsonrpc: '2.0',
    error: false,
    errorText: '',
    data: {},
    additionalErrors: null,
  });
};

const createTodoController = async (req, res) => {
  const { todoData } = req.body;

  const newTodo = {
    id: `${Math.random().toString(36).substring(2, 10)}-${Date.now()}`,
    done: false,
    createdAt: new Date(),
    ...todoData,
  };

  await todosModel.push(newTodo).write();

  res.status(200).json({
    jsonrpc: '2.0',
    error: false,
    errorText: '',
    data: newTodo,
    additionalErrors: null,
  });
};

const fetchTodosController = async (req, res) => {
  const todos = await todosModel.value();

  res.status(200).json({
    jsonrpc: '2.0',
    error: false,
    errorText: '',
    additionalErrors: null,
    data: {
      todos,
    },
  });
};

const updateTodosController = async (req, res) => {
  const { updatedData } = req.body;

  const todos = await todosModel.value();

  const foundTodo = todos.find((todo) => todo.id === updatedData.id);

  if (!foundTodo) {
    res.status(200).json({
      jsonrpc: '2.0',
      error: {
        code: 404,
        message: 'todo doesnt exist',
      },
      errorText: '',
      data: {},
      additionalErrors: null,
    });

    return;
  }

  const updatedTodo = await todosModel
    .find({ id: foundTodo.id })
    .assign(updatedData)
    .write();

  res.status(200).json({
    jsonrpc: '2.0',
    error: false,
    errorText: '',
    data: updatedTodo,
    additionalErrors: null,
  });
};

module.exports = {
  deleteTodoController,
  createTodoController,
  fetchTodosController,
  updateTodosController,
};
