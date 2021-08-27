declare type LoggedUserResponse = {
  token: string;
  user: LoggedUser;
};

declare type LoggedUser = {
  id: string;
  name: string;
  email: string;
};

declare type CreatedUserResponse = {
  id: string;
  name: string;
  password: string;
  email: string;
};

declare type UserLoginCredentials = {
  password: string;
  email: string;
};

declare type UserSignupCredentials = {
  name: string;
  password: string;
  email: string;
};

declare type ResetPasswordCredentialsChallengeResponse = {
  token: string;
  email: string;
};

declare type ResetPassword = {
  token?: string | null;
  password: string;
};

declare type ResetPasswordResponse = {
  id: string;
  email: string;
};

declare type UserData = {
  id: string;
  name: string;
  password: string;
  adresses: UserAddress[];
  email: string;
  cpf: string;
  birthdate: string;
};

declare type UserAddress = {
  id: string;
  name: string;
  customerId: string;
  cep: string;
  uf: string;
  city: string;
  street: string;
  district: string;
  number: string;
  addressDefault: boolean;
};

declare type CreateUserAddress = {
  street: string;
  district: string;
  city: string;
  cep: string;
  number: string;
  uf: string;
  defaultAddress: boolean;
  name: string;
};
