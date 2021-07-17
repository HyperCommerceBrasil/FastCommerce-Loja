declare type LoggedUserResponse = {
  token: string;
  user: LoggedUser;
};

declare type LoggedUser = {
  id: string;
  name: string;
  email: string;
};

declare type UserCredentials = {
  password: string;
  email: string;
};
