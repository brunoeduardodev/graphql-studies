import Joi from "joi";

export const validateSchema = (schema: Joi.Schema, data: any) => {
  const { error } = schema.validate(data, { abortEarly: false });
  if (error) {
    return error.details.map((error) => error.message);
  }

  return null;
};
