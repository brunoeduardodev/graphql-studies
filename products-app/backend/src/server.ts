import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

server.listen(3000).then(({ url }) => {
  console.log(`Server started at ${url}`);
});
