import { getResponseActions } from "../../helpers/getResponseActions";
import { CreateCategoryInput } from "../../types/category";
import { Context } from "../../types/graphql";
import { create as createCategory } from "../../validations/category";
import { validateSchema } from "../../helpers/validateSchema";

export default class CreateCategoryService {
  static async handle(data: CreateCategoryInput, { prisma }: Context) {
    const { success, error } = getResponseActions("category");
    try {
      const validationErrors = validateSchema(createCategory, data);

      if (validationErrors) {
        return error(validationErrors);
      }

      const category = await prisma.category.create({ data });
      return success(category);
    } catch (err) {
      console.warn(err);
      return error(["Something went wrong"]);
    }
  }
}
