import { User } from "@prisma/client";
import IndexUsersService from "../services/user/IndexUsersService";
import ShowUserService from "../services/user/ShowUserService";
import UpdateUserService from "../services/user/UpdateUserService";
import DeleteUserService from "../services/user/DeleteUserService";
import { MutationResolver, QueryResolver } from "../types/graphql";
import { FindUserInput, UpdateUserInput, DeleteUserInput } from "../types/user";
import { ensureAdminOrSameUser, ensureUserIsAdmin } from "../validations/auth";

export default class UsersController {
  static index: QueryResolver<null, null, User[]> = (parent, args, context) => {
    ensureUserIsAdmin(context);

    return IndexUsersService.handle(context);
  };

  static show: QueryResolver<null, FindUserInput, User> = (parent, args, context) => {
    ensureUserIsAdmin(context);

    return ShowUserService.handle(args, context);
  };

  static update: MutationResolver<null, UpdateUserInput, User> = (parent, args, context) => {
    ensureAdminOrSameUser(context, args.id);

    return UpdateUserService.handle(args, context);
  };

  static delete: MutationResolver<null, DeleteUserInput, User> = (parent, args, context) => {
    ensureAdminOrSameUser(context, args.id);

    return DeleteUserService.handle(args, context);
  };
}
