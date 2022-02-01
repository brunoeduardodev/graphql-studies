import { getResponseActions } from "../../helpers/getResponseActions";
import { Context } from "../../types/graphql";

export default class DeleteProductService {
  static async handle(id: string, { prisma }: Context) {
    const { success, error } = getResponseActions("product");
    try {
      const product = await prisma.product.delete({
        where: { id },
      });

      return success(product);
    } catch (err) {
      return error(["Something went wrong"]);
    }
  }
}
