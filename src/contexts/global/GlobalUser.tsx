import React, { createContext, useEffect, useState } from 'react';
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
  useLocalStorage,
  STORAGE_KEYS,
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
  const { saveValue, fetchValue } = useLocalStorage();
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

  const loginFromStorageData = () => {
    const storageUserContent = fetchValue(STORAGE_KEYS.USER);

    if (storageUserContent) {
      const { token, user }: LoggedUserResponse = JSON.parse(
        storageUserContent,
      );

      setToken(token);
      setUser(user);
    }
  };

  const login = async ({ email, password }: Partial<UserLoginCredentials>) => {
    const { token, user } = await loginApi({ email, password });

    setToken(token);
    setUser(user);

    saveValue(STORAGE_KEYS.USER, JSON.stringify({ token, user }));

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

  useEffect(() => {
    loginFromStorageData();
  }, []);

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
