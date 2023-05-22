const express = require('express');
const {
  deleteTodoController,
  createTodoController,
  fetchTodosController,
  updateTodosController,
} = require('../../controllers/todos');

const todosRouter = express.Router();

// todos
todosRouter.get('/', fetchTodosController);
todosRouter.post('/delete', deleteTodoController);
todosRouter.post('/create', createTodoController);
todosRouter.post('/update', updateTodosController);

module.exports.todosRouter = todosRouter;
