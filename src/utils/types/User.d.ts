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
