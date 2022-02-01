import { getResponseActions } from "../../helpers/getResponseActions";
import { UpdateProductInput } from "../../types/product";
import { Context } from "../../types/graphql";
import { create as createProduct } from "../../validations/product";
import { validateSchema } from "../../helpers/validateSchema";

export default class UpdateProductService {
  static async handle({ id, ...data }: UpdateProductInput, { prisma }: Context) {
    const { success, error } = getResponseActions("product");
    try {
      const validationErrors = validateSchema(createProduct, data);

      if (validationErrors) {
        return error(validationErrors);
      }

      const productExists = await prisma.product.findUnique({ where: { id } });

      if (!productExists) {
        return error(["Product not found"]);
      }

      const product = await prisma.product.update({ where: { id }, data });
      return success(product);
    } catch (err) {
      return error(["Something went wrong"]);
    }
  }
}
