import { PrismaClient, Prisma, User } from "@prisma/client";
import { AuthUser } from "../auth";

export type Context = {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;

  user?: AuthUser;
};
