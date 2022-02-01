import { Context } from "../../types/graphql";

export default class IndexUsersService {
  static async handle({ prisma }: Context) {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      return [];
    }
  }
}
