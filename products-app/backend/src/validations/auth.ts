import { AuthenticationError } from "apollo-server";
import { ExpressContext } from "apollo-server-express";
import Joi from "joi";
import { Context } from "../types/graphql";
import { validateUserToken } from "../utils/jwt";

export const register = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().email().required().min(5),
  password: Joi.string().required().min(6),
});

export const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const ensureUserIsAdmin = ({ user }: Context) => {
  if (user?.isAdmin) {
    return true;
  }

  throw new AuthenticationError("You do not have permission to perform this action");
};

export const ensureUserIsAuthenticated = ({ user }: Context) => {
  if (user) {
    return true;
  }

  throw new AuthenticationError("You must be logged in to perform this action");
};

export const ensureAdminOrSameUser = ({ user }: Context, userId: string) => {
  if (user?.isAdmin || user?.id === userId) {
    return true;
  }

  throw new AuthenticationError("You do not have permission to perform this action");
};

export const getUserFromHeaders = (headers: Record<string, any>) => {
  const { authorization } = headers;

  const user = validateUserToken(authorization || "");
  return user;
};
