import { Category } from "@prisma/client";
import { Context } from "../../types/graphql";

export default class GetCategoryProductsService {
  static async handle({ id }: Category, { prisma }: Context) {
    try {
      const products = await prisma.product.findMany({
        where: { categoryId: id },
      });
      return products;
    } catch (err) {
      return [];
    }
  }
}
