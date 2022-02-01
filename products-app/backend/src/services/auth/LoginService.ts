import { getResponseActions } from "../../helpers/getResponseActions";
import { validateSchema } from "../../helpers/validateSchema";
import { LoginInput } from "../../types/auth";
import { Context } from "../../types/graphql";
import { login } from "../../validations/auth";
import bcrypt from "bcrypt";
import { signUserToken } from "../../utils/jwt";

export default class LoginService {
  static async handle(data: LoginInput, { prisma }: Context) {
    const { success, error } = getResponseActions("token");
    const { email, password } = data;

    try {
      const validationErrors = validateSchema(login, data);

      if (validationErrors) {
        return error(validationErrors);
      }

      const user = await prisma.user.findFirst({ where: { email } });

      if (!user) {
        return error(["Invalid credentials"]);
      }

      const hashedPassword = user.password;
      const isPasswordValid = await bcrypt.compare(password, hashedPassword);

      if (!isPasswordValid) {
        return error(["Invalid credentials"]);
      }

      const token = signUserToken(user);

      return success(token);
    } catch (err) {
      return error(["Something went wrong"]);
    }
  }
}
