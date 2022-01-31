import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: {
    prisma,
  },
});

server.listen(3000).then(({ url }) => {
  console.log(`Server started at ${url}`);
});
