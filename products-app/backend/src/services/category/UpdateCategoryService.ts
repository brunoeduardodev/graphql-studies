import { getResponseActions } from "../../helpers/getResponseActions";
import { UpdateCategoryInput } from "../../types/category";
import { Context } from "../../types/graphql";
import { update as updateCategory } from "../../validations/category";
import { validateSchema } from "../../helpers/validateSchema";

export default class UpdateCategoryService {
  static async handle({ id, ...data }: UpdateCategoryInput, { prisma }: Context) {
    const { success, error } = getResponseActions("category");
    try {
      const validationErrors = validateSchema(updateCategory, data);

      if (validationErrors) {
        return error(validationErrors);
      }

      const categoryExists = await prisma.category.findUnique({ where: { id } });

      if (!categoryExists) {
        return error(["Category not found"]);
      }

      const category = await prisma.category.update({ where: { id }, data });
      return success(category);
    } catch (err) {
      return error(["Something went wrong"]);
    }
  }
}
