import AuthController from "../../controllers/AuthController";
import CategoryController from "../../controllers/CategoryController";
import ProductController from "../../controllers/ProductController";
import UsersController from "../../controllers/UsersController";

export const Mutation = {
  categoryCreate: CategoryController.create,
  categoryUpdate: CategoryController.update,
  categoryDelete: CategoryController.delete,

  productCreate: ProductController.create,
  productUpdate: ProductController.update,
  productDelete: ProductController.delete,

  userUpdate: UsersController.update,
  userDelete: UsersController.delete,

  register: AuthController.register,
  login: AuthController.login,
};
