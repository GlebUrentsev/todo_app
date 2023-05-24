import Joi from 'joi';

export const responseSchema = Joi.object({
  data: Joi.array(),
});
