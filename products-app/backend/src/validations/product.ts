import Joi from "joi";

export const create = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().min(5).required(),
  price: Joi.number().min(0.01).required(),
  image: Joi.string().required(),
  categoryId: Joi.string().required(),
});

export const update = Joi.object({
  name: Joi.string(),
  description: Joi.string().min(5),
  price: Joi.number().min(0.01),
  image: Joi.string(),
  categoryId: Joi.string(),
});
