import { Product } from "@prisma/client";
import { Context } from "../../types/graphql";

export default class GetProductCategoryService {
  static async handle(parent: Product, { prisma }: Context) {
    try {
      const category = await prisma.category.findUnique({
        where: { id: parent.categoryId },
      });
      return category;
    } catch (err) {
      return null;
    }
  }
}
