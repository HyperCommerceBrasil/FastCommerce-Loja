import React, { createContext, useState } from 'react';
import {
  login as loginApi,
  createUser as createUserAPI,
  resetUserPasswordChallenge,
  resetUserPassword,
} from '../../services';
import {
  getFirstName,
  useQuery,
  welcomeBack,
  welcomeToFastCommerce,
} from '../../utils';

type UserData = {
  token?: string;
  user?: LoggedUser;
  login(userCredentials: Partial<UserLoginCredentials>): Promise<void>;
  createUser(
    userCredentials: Partial<UserSignupCredentials>,
    shouldLogin?: boolean,
  ): Promise<void>;
  forgotPasswordChallenge(email: string): Promise<void>;
  forgotPasswordReset(password: string): Promise<void>;
};

export const GlobalUserContext = createContext<UserData>({} as UserData);

export const GlobalUserProvider: React.FC = ({ children }) => {
  const { getURLQueryParam } = useQuery();
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<LoggedUser>();

  const createUser = async (
    { email, name, password }: Partial<UserSignupCredentials>,
    shouldLogin = false,
  ) => {
    await createUserAPI({ email, name, password });

    if (shouldLogin) {
      const { token, user } = await loginApi({ email, password });

      setToken(token);
      setUser(user);

      welcomeToFastCommerce(user.name);
    }
  };

  const login = async ({ email, password }: Partial<UserLoginCredentials>) => {
    const { token, user } = await loginApi({ email, password });

    setToken(token);
    setUser(user);

    welcomeBack(getFirstName(user.name) || '');
  };

  const forgotPasswordChallenge = async (emailToReset: string) => {
    await resetUserPasswordChallenge(emailToReset);
  };

  const forgotPasswordReset = async (password: string) => {
    const token = getURLQueryParam('token');

    const { email } = await resetUserPassword({ password, token });

    await login({ email, password });
  };

  return (
    <GlobalUserContext.Provider
      value={{
        token,
        user,
        login,
        createUser,
        forgotPasswordChallenge,
        forgotPasswordReset,
      }}
    >
      {children}
    </GlobalUserContext.Provider>
  );
};
