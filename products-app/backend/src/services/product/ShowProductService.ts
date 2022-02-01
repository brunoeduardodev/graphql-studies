import { getResponseActions } from "../../helpers/getResponseActions";
import { Context } from "../../types/graphql";

export default class ShowProductService {
  static async handle(id: string, { prisma }: Context) {
    try {
      const product = await prisma.product.findUnique({
        where: { id },
      });

      if (!product) {
        return null;
      }
      return product;
    } catch (err) {
      return null;
    }
  }
}
