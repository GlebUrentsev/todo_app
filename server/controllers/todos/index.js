const { todosModel } = require('../../models/todos');

const deleteTodoController = async (req, res) => {
  res.status(200).json({
    jsonrpc: '2.0',
    result: {},
  });
};

const createTodoController = async (req, res) => {
  res.status(200).json({
    jsonrpc: '2.0',
    result: {},
  });
};

const fetchTodosController = async (req, res) => {
  const todos = await todosModel.value();

  res.status(200).json({
    jsonrpc: '2.0',
    result: todos,
  });
};

const updateTodosController = async (req, res) => {
  res.status(200).json({
    jsonrpc: '2.0',
    result: {},
  });
};

module.exports = {
  deleteTodoController,
  createTodoController,
  fetchTodosController,
  updateTodosController,
};
