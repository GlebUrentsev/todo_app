import Joi from 'joi';

export const responseSchema = Joi.object({
  title: Joi.string().required(),
  createdAt: Joi.string().required(),
  description: Joi.string().required(),
  done: Joi.bool().required(),
  id: Joi.string().required(),
});
