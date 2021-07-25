import React, { createContext, useState } from 'react';
import {
  login as loginApi,
  createUser as createUserAPI,
  resetUserPasswordChallenge,
  resetUserPassword,
} from '../../services';
import { getFirstName, welcomeBack, welcomeToFastCommerce } from '../../utils';
import { STORAGE_KEYS } from '../../utils/enums';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

type UserData = {
  token?: string;
  user?: LoggedUser;
  login(userCredentials: Partial<UserLoginCredentials>): Promise<void>;
  createUser(
    userCredentials: Partial<UserSignupCredentials>,
    shouldLogin?: boolean,
  ): Promise<void>;
  resetPasswordMail?: string;
  forgotPasswordChallenge(email: string): Promise<void>;
  forgotPasswordReset(password: string): Promise<void>;
};

export const GlobalUserContext = createContext<UserData>({} as UserData);

export const GlobalUserProvider: React.FC = ({ children }) => {
  const { saveValue, deleteValue, fetchValue } = useLocalStorage();
  const [token, setToken] = useState<string>();
  const [resetPasswordMail, setResetPasswordMail] = useState<string>();
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
    const { token, email } = await resetUserPasswordChallenge(emailToReset);

    saveValue(STORAGE_KEYS.RESET_PASSWORD_CHALLENGE, token);

    setResetPasswordMail(email);
  };

  const forgotPasswordReset = async (password: string) => {
    const token = fetchValue(STORAGE_KEYS.RESET_PASSWORD_CHALLENGE);

    const { email } = await resetUserPassword({ password, token });

    deleteValue(STORAGE_KEYS.RESET_PASSWORD_CHALLENGE);

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
        resetPasswordMail,
        forgotPasswordReset,
      }}
    >
      {children}
    </GlobalUserContext.Provider>
  );
};
