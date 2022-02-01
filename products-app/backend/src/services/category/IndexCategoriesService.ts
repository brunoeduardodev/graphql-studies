import { Context } from "../../types/graphql";

export default class IndexCategoriesServices {
  static async handle({ prisma }: Context) {
    try {
      const categories = await prisma.category.findMany({});
      return categories;
    } catch (err) {
      return [];
    }
  }
}
