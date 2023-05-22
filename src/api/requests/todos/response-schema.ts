import Joi from 'joi';

export const todoSchema = Joi.object({
  id: Joi.string().required(),
  created: Joi.string().required(),
  done: Joi.bool().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
});
