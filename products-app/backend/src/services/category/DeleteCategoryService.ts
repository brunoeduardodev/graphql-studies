import { getResponseActions } from "../../helpers/getResponseActions";
import { Context } from "../../types/graphql";

export default class DeleteCategoryService {
  static async handle(id: string, { prisma }: Context) {
    const { success, error } = getResponseActions("category");
    try {
      const category = await prisma.category.delete({
        where: { id },
      });

      return success(category);
    } catch (err) {
      return error(["Something went wrong"]);
    }
  }
}
