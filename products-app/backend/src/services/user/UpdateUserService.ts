import { getResponseActions } from "../../helpers/getResponseActions";
import { validateSchema } from "../../helpers/validateSchema";
import { Context } from "../../types/graphql";
import { UpdateUserInput } from "../../types/user";
import { update as updateUser } from "../../validations/user";

export default class UpdateUserService {
  static async handle({ id, ...data }: UpdateUserInput, { prisma }: Context) {
    const { error, success } = getResponseActions("user");
    try {
      const validationErrors = validateSchema(updateUser, data);
      if (validationErrors) return error(validationErrors);

      const userExists = await prisma.user.findUnique({ where: { id } });
      if (!userExists) return error(["User not found"]);

      const user = await prisma.user.update({
        where: { id },
        data,
      });

      return success(user);
    } catch (err) {
      return error(["Something went wrong"]);
    }
  }
}
