import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { AuthUser } from "../types/auth";

export const signUserToken = (user: User): string => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || ""
  );

  return `Bearer ${token}`;
};

export const validateUserToken = (token: string): AuthUser | null => {
  try {
    const [, payload] = token.split(" ");

    const data = jwt.verify(payload, process.env.JWT_SECRET || "");
    return data as AuthUser;
  } catch (err) {
    return null;
  }
};
