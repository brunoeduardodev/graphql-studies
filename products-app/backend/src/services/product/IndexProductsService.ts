import { getResponseActions } from "../../helpers/getResponseActions";
import { Context } from "../../types/graphql";

export default class IndexProductsService {
  static async handle({ prisma }: Context) {
    try {
      const products = await prisma.product.findMany({});
      return products;
    } catch (err) {
      return [];
    }
  }
}
