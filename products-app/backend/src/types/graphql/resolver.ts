import { Context } from "./context";

type MutationResult<T> = Promise<
  {
    errors: { message: string }[];
  } & Record<string, object | null>
>;

export type MutationResolver<Parent, Args, Payload> = (
  parent: Parent,
  args: Args,
  context: Context
) => MutationResult<Payload>;

export type QueryResolver<Parent, Args, Payload> = (
  parent: Parent,
  args: Args,
  context: Context
) => Promise<Payload | null>;
