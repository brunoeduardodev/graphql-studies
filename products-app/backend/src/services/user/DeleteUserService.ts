import { getResponseActions } from "../../helpers/getResponseActions";
import { Context } from "../../types/graphql";
import { DeleteUserInput } from "../../types/user";

export default class UpdateUserService {
  static async handle({ id }: DeleteUserInput, { prisma }: Context) {
    const { error, success } = getResponseActions("user");
    try {
      const userExists = await prisma.user.findUnique({ where: { id } });
      if (!userExists) return error(["User not found"]);

      const user = await prisma.user.delete({
        where: { id },
      });

      return success(user);
    } catch (err) {
      return error(["Something went wrong"]);
    }
  }
}
