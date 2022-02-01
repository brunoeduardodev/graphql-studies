import { AuthenticationError } from "apollo-server";
import { ExpressContext } from "apollo-server-express";
import { Context } from "../types/graphql";
import { validateUserToken } from "../utils/jwt";

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

export const getUserFromHeaders = ({ req }: ExpressContext) => {
  const { authorization } = req.headers;

  const user = validateUserToken(authorization || "");
  return user;
};
