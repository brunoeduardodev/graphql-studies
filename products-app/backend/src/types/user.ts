export type FindUserInput = {
  id: string;
};

export type UpdateUserInput = {
  id: string;
  name?: string;
  email?: string;
  password?: string;
};

export type DeleteUserInput = {
  id: string;
};
