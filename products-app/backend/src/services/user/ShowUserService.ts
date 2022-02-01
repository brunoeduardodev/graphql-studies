import { Context } from "../../types/graphql";
import { FindUserInput } from "../../types/user";

export default class ShowUserService {
  static async handle({ id }: FindUserInput, { prisma }: Context) {
    try {
      const user = await prisma.user.findUnique({ where: { id } });
      return user;
    } catch (error) {
      return null;
    }
  }
}
