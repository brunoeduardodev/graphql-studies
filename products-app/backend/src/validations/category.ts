import joi from "joi";

export const create = joi.object({
  name: joi.string().required(),
});

export const update = joi.object({
  name: joi.string(),
});
