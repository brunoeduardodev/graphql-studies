import { Category, Product } from "@prisma/client";
import { MutationResolver, QueryResolver } from "../types/graphql";
import { CreateCategoryInput, DeleteCategoryInput, FindCategoryInput, UpdateCategoryInput } from "../types/category";
import IndexCategoriesServices from "../services/category/IndexCategoriesService";
import ShowCategoryService from "../services/category/ShowCategoryService";
import CreateCategoryService from "../services/category/CreateCategoryService";
import UpdateCategoryService from "../services/category/UpdateCategoryService";
import DeleteCategoryService from "../services/category/DeleteCategoryService";
import { ensureUserIsAdmin } from "../validations/auth";
import GetCategoryProductsService from "../services/category/GetCategoryProductsService";

export default class CategoryController {
  static index: QueryResolver<null, null, Category[]> = async (parent, args, context) => {
    return IndexCategoriesServices.handle(context);
  };

  static show: QueryResolver<null, FindCategoryInput, Category> = async (parent, { id }, context) => {
    return ShowCategoryService.handle(id, context);
  };

  static create: MutationResolver<null, CreateCategoryInput, Category> = async (parent, data, context) => {
    ensureUserIsAdmin(context);

    return CreateCategoryService.handle(data, context);
  };

  static update: MutationResolver<null, UpdateCategoryInput, Category> = async (parent, data, context) => {
    ensureUserIsAdmin(context);

    return UpdateCategoryService.handle(data, context);
  };

  static delete: MutationResolver<null, DeleteCategoryInput, Category> = async (parent, { id }, context) => {
    ensureUserIsAdmin(context);

    return DeleteCategoryService.handle(id, context);
  };

  static getProducts: QueryResolver<Category, null, Product[]> = async (parent, args, context) => {
    return GetCategoryProductsService.handle(parent, context);
  };
}
