import React, { createContext, useEffect, useState } from 'react';
import {
  login as loginApi,
  createUser as createUserAPI,
  resetUserPasswordChallenge,
  resetUserPassword,
  getUserData,
  fetchZipCodeData,
  createUserAddress,
} from '../../services';
import api from '../../services/api';
import {
  getFirstName,
  useQuery,
  welcomeBack,
  welcomeToFastCommerce,
  useLocalStorage,
  STORAGE_KEYS,
} from '../../utils';

type ContextUserData = {
  token?: string;
  user?: UserData;
  login(userCredentials: Partial<UserLoginCredentials>): Promise<void>;
  createUser(
    userCredentials: Partial<UserSignupCredentials>,
    shouldLogin?: boolean,
  ): Promise<void>;
  forgotPasswordChallenge(email: string): Promise<void>;
  forgotPasswordReset(password: string): Promise<void>;
  fetchZipCode(zipCode: string): Promise<ViacepResponse>;
  createNewAddress(address: CreateUserAddress): Promise<void>;
};

export const GlobalUserContext = createContext<ContextUserData>(
  {} as ContextUserData,
);

export const GlobalUserProvider: React.FC = ({ children }) => {
  const { saveValue, fetchValue, deleteValue } = useLocalStorage();
  const { getURLQueryParam } = useQuery();
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<UserData>();

  const fetchZipCode = async (zipCode: string) => {
    const { data } = await fetchZipCodeData(zipCode);

    return data;
  };

  const createNewAddress = async (address: CreateUserAddress) => {
    await createUserAddress(address);
  };

  const createUser = async (
    { email, name, password }: Partial<UserSignupCredentials>,
    shouldLogin = false,
  ) => {
    await createUserAPI({ email, name, password });

    if (shouldLogin) {
      const { token } = await loginApi({ email, password });

      api.defaults.headers.authorization = `Bearer ${token}`;

      const user = await getUserData();

      setToken(token);
      setUser(user);

      welcomeToFastCommerce(user.name);
    }
  };

  const loginFromStorageData = async () => {
    const storageUserContent = fetchValue(STORAGE_KEYS.USER_TOKEN);

    if (storageUserContent) {
      try {
        const { token } = JSON.parse(storageUserContent);

        api.defaults.headers.authorization = `Bearer ${token}`;

        const user = await getUserData();

        setToken(token);
        setUser(user);
      } catch (err) {
        deleteValue(STORAGE_KEYS.USER_TOKEN);
      }
    }
  };

  const login = async ({ email, password }: Partial<UserLoginCredentials>) => {
    const { token } = await loginApi({ email, password });

    api.defaults.headers.authorization = `Bearer ${token}`;

    const user = await getUserData();

    setToken(token);
    setUser(user);

    saveValue(STORAGE_KEYS.USER_TOKEN, JSON.stringify({ token }));

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
        fetchZipCode,
        createNewAddress,
      }}
    >
      {children}
    </GlobalUserContext.Provider>
  );
};
