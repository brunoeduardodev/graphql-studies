import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    # categories: [Category!]!
    # category(id: ID!): Category

    # products: [Product!]!
    # product(id: ID!): Product

    # users: [Users!]!
  }
`;
