export type LoginInput = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export type RegisterInput = {
  email: string;
  password: string;
  name: string;
};

export type RegisterResponse = LoginResponse;

export type AuthUser = {
  email: string;
  id: string;
  isAdmin: boolean;
  name: string;
};

export type MeResponse = {
  id: string;
  email: string;
  name: string;
};
