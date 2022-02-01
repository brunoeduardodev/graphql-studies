import { Context } from "../../types/graphql";

export default class ShowCategoryService {
  static async handle(id: string, { prisma }: Context) {
    try {
      const category = await prisma.category.findUnique({
        where: { id },
      });

      if (!category) {
        return null;
      }
      return category;
    } catch (err) {
      return null;
    }
  }
}
