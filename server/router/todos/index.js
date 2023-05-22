const express = require('express');
const {
  deleteTodoController,
  createTodoController,
  getTodosController,
  updateTodosController,
} = require('../../controllers/todos');

const todosRouter = express.Router();

// todos
todosRouter.get('/', getTodosController);
todosRouter.post('/delete', deleteTodoController);
todosRouter.post('/create', createTodoController);
todosRouter.post('/update', updateTodosController);

module.exports.todosRouter = todosRouter;
