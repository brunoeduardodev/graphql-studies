import { getResponseActions } from "../../helpers/getResponseActions";
import { validateSchema } from "../../helpers/validateSchema";
import { RegisterInput } from "../../types/auth";
import { Context } from "../../types/graphql";
import { register } from "../../validations/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { signUserToken } from "../../utils/jwt";

export default class RegisterService {
  static async handle(data: RegisterInput, { prisma }: Context) {
    const { success, error } = getResponseActions("token");
    const { email, name, password } = data;

    try {
      const validationErrors = validateSchema(register, data);

      if (validationErrors) {
        return error(validationErrors);
      }

      const userExists = await prisma.user.findFirst({ where: { email } });

      if (userExists) {
        return error(["User with given email already exists"]);
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
        },
      });

      const token = signUserToken(user);

      return success(token);
    } catch (err) {
      return error(["Something went wrong"]);
    }
  }
}
