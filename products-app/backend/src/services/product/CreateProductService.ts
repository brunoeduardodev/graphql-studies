import { getResponseActions } from "../../helpers/getResponseActions";
import { CreateProductInput } from "../../types/product";
import { Context } from "../../types/graphql";
import { create as createProduct } from "../../validations/product";
import { validateSchema } from "../../helpers/validateSchema";

export default class CreateProductService {
  static async handle(data: CreateProductInput, { prisma }: Context) {
    const { success, error } = getResponseActions("product");
    try {
      const validationErrors = validateSchema(createProduct, data);

      if (validationErrors) {
        return error(validationErrors);
      }

      const product = await prisma.product.create({ data });
      return success(product);
    } catch (err) {
      return error(["Something went wrong"]);
    }
  }
}
