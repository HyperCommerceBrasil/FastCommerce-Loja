import React, { createContext, useState } from 'react';
import { login as loginApi } from '../../services';
import { error } from '../../utils';

type UserData = {
  token?: string;
  user?: LoggedUser;
  login(userCredentials: Partial<UserCredentials>): void;
};

export const GlobalUserContext = createContext<UserData>({} as UserData);

export const GlobalUserProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<LoggedUser>();

  const login = async ({ email, password }: Partial<UserCredentials>) => {
    try {
      const { token, user } = await loginApi({ email, password });

      setToken(token);
      setUser(user);
    } catch (err) {
      error(err);
    }
  };

  return (
    <GlobalUserContext.Provider value={{ token, user, login }}>
      {children}
    </GlobalUserContext.Provider>
  );
};
