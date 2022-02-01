import { Category, Product } from "@prisma/client";
import IndexProductsService from "../services/product/IndexProductsService";
import ShowProductService from "../services/product/ShowProductService";
import CreateProductService from "../services/product/CreateProductService";
import UpdateProductService from "../services/product/UpdateProductService";
import DeleteProductService from "../services/product/DeleteProductService";
import { MutationResolver, QueryResolver } from "../types/graphql";
import { CreateProductInput, DeleteProductInput, FindProductInput, UpdateProductInput } from "../types/product";
import { ensureUserIsAdmin } from "../validations/auth";
import GetProductCategoryService from "../services/product/GetProductCategoryService";

export default class ProductController {
  static index: QueryResolver<null, null, Product[]> = async (parent, args, context) => {
    return IndexProductsService.handle(context);
  };

  static show: QueryResolver<null, FindProductInput, Product> = async (parent, { id }, context) => {
    return ShowProductService.handle(id, context);
  };

  static create: MutationResolver<null, CreateProductInput, Product> = async (parent, data, context) => {
    ensureUserIsAdmin(context);

    return CreateProductService.handle(data, context);
  };

  static update: MutationResolver<null, UpdateProductInput, Product> = async (parent, data, context) => {
    ensureUserIsAdmin(context);

    return UpdateProductService.handle(data, context);
  };

  static delete: MutationResolver<null, DeleteProductInput, Product> = async (parent, { id }, context) => {
    ensureUserIsAdmin(context);

    return DeleteProductService.handle(id, context);
  };

  static getCategory: QueryResolver<Product, null, Category> = async (parent, args, context) => {
    return GetProductCategoryService.handle(parent, context);
  };
}
