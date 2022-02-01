import AuthController from "../../controllers/AuthController";
import CategoryController from "../../controllers/CategoryController";
import ProductController from "../../controllers/ProductController";
import UsersController from "../../controllers/UsersController";

export const Query = {
  categories: CategoryController.index,
  category: CategoryController.show,

  products: ProductController.index,
  product: ProductController.show,

  users: UsersController.index,
  user: UsersController.show,

  me: AuthController.me,
};
