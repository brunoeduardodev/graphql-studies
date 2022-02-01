import Joi from "joi";

export const update = Joi.object({
  name: Joi.string().min(3),
  email: Joi.string().email().min(5),
  password: Joi.string().min(6),
});
