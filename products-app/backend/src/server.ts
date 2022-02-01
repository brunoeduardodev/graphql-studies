import { ApolloServer } from "apollo-server";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schema";
import { PrismaClient } from "@prisma/client";
import { getUserFromHeaders } from "./validations/auth";

const prisma = new PrismaClient();

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: ({ req }) => {
    const user = getUserFromHeaders(req.headers);
    return {
      prisma,
      user,
    };
  },
});

server.listen(3000).then(({ url }) => {
  console.log(`Server started at ${url}`);
});
