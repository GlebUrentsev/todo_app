import Joi from 'joi';

export const responseSchema = Joi.object({
  data: Joi.object({
    created: Joi.string().required(),
    description: Joi.string().required(),
    done: Joi.bool().required(),
    id: Joi.number().required(),
  }),
});
