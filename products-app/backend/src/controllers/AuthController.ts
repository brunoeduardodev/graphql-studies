import LoginService from "../services/auth/LoginService";
import MeService from "../services/auth/MeService";
import RegisterService from "../services/auth/RegisterService";
import { LoginInput, LoginResponse, MeResponse, RegisterInput, RegisterResponse } from "../types/auth";
import { MutationResolver, QueryResolver } from "../types/graphql";

export default class AuthController {
  static login: MutationResolver<null, LoginInput, LoginResponse> = (parent, args, context) => {
    return LoginService.handle(args, context);
  };
  static register: MutationResolver<null, RegisterInput, RegisterResponse> = (parent, args, context) => {
    return RegisterService.handle(args, context);
  };
  static me: QueryResolver<null, null, MeResponse> = (parent, args, context) => {
    return MeService.handle(context);
  };
}
