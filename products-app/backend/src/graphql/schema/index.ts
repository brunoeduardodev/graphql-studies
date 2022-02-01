import { gql } from "apollo-server";

export const typeDefs = gql`
  type Category {
    id: ID!
    name: String!

    products: [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    image: String!
    category: Category
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    categories: [Category!]!
    category(id: ID!): Category

    products: [Product!]!
    product(id: ID!): Product

    users: [User!]!
    user(id: ID!): User

    me: User
  }

  type Mutation {
    categoryCreate(name: String!): CategoryMutation
    categoryUpdate(id: ID!, name: String!): CategoryMutation
    categoryDelete(id: ID!): CategoryMutation

    productCreate(name: String!, description: String!, price: Float!, image: String!, categoryId: ID!): ProductMutation
    productUpdate(
      id: ID!
      name: String
      description: String
      price: Float
      image: String
      categoryId: ID
    ): ProductMutation
    productDelete(id: ID!): ProductMutation

    userUpdate(id: ID!, name: String, email: String, password: String): UserMutation
    userDelete(id: ID!): UserMutation

    register(email: String!, password: String!, name: String!): AuthMutation
    login(email: String!, password: String!): AuthMutation
  }

  type ErrorMessage {
    message: String!
  }

  type CategoryMutation {
    category: Category
    errors: [ErrorMessage!]!
  }

  type ProductMutation {
    product: Product
    errors: [ErrorMessage!]!
  }

  type UserMutation {
    user: User
    errors: [ErrorMessage!]!
  }

  type AuthMutation {
    token: String
    errors: [ErrorMessage!]!
  }
`;
