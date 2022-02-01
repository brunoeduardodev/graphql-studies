import { MeResponse } from "../../types/auth";
import { Context } from "../../types/graphql";

export default class MeService {
  static async handle(context: Context): Promise<MeResponse | null> {
    try {
      if (!context.user) return null;
      const { id } = context.user;
      const user = await context.prisma.user.findUnique({ where: { id } });
      return user;
    } catch (error) {
      return null;
    }
  }
}
