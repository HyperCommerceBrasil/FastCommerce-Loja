import React, { createContext, useEffect, useState } from 'react';
import {
  login as loginApi,
  createUser as createUserAPI,
  resetUserPasswordChallenge,
  resetUserPassword,
  getUserData,
  fetchZipCodeData,
  createUserAddress,
  updateUserAddress,
  deleteUserAddress,
} from '../../services';
import api from '../../services/api';
import {
  getFirstName,
  useQuery,
  welcomeBack,
  welcomeToFastCommerce,
  useSessionStorage,
  SESSION_STORAGE_KEYS,
  sortByKey,
} from '../../utils';

type ContextUserData = {
  token?: string;
  user?: UserData;
  login(userCredentials: Partial<UserLoginCredentials>): Promise<void>;
  createUser(
    userCredentials: Partial<UserSignupCredentials>,
    shouldLogin?: boolean,
  ): Promise<void>;
  fetchUserData(): Promise<void>;
  forgotPasswordChallenge(email: string): Promise<void>;
  forgotPasswordReset(password: string): Promise<void>;
  fetchZipCode(zipCode: string): Promise<ViacepResponse>;
  createNewAddress(address: CreateUserAddress): Promise<void>;
  updateAddress(
    address: Partial<CreateUserAddress>,
    addressId: string,
  ): Promise<void>;
  deleteAddress(addressId: string): Promise<void>;
};

export const GlobalUserContext = createContext<ContextUserData>(
  {} as ContextUserData,
);

export const GlobalUserProvider: React.FC = ({ children }) => {
  const { saveValue, fetchValue, deleteValue } = useSessionStorage();
  const { getURLQueryParam } = useQuery();
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<UserData>();

  const sortByAddressName = (user: UserData) => {
    const sortedAddreses: UserAddress[] = sortByKey('name', user.adresses);

    const treatedUser: UserData = {
      ...user,
      adresses: sortedAddreses,
    };

    return treatedUser;
  };

  const treatmentOverFetchedUser = (user: UserData) => sortByAddressName(user);

  const fetchZipCode = async (zipCode: string) => {
    const data = await fetchZipCodeData(zipCode);

    return data;
  };

  const updateAddress = async (
    address: Partial<CreateUserAddress>,
    addressId: string,
  ) => {
    await updateUserAddress(address, addressId);
  };

  const deleteAddress = async (addressId: string) => {
    await deleteUserAddress(addressId);
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

      const treatedUser = treatmentOverFetchedUser(user);
      setUser(treatedUser);

      welcomeToFastCommerce(user.name);
    }
  };

  const loginFromStorageData = async () => {
    const storageUserContent = fetchValue(SESSION_STORAGE_KEYS.USER_TOKEN);

    if (storageUserContent) {
      try {
        const { token } = JSON.parse(storageUserContent);

        api.defaults.headers.authorization = `Bearer ${token}`;

        const user = await getUserData();

        const treatedUser = treatmentOverFetchedUser(user);

        setToken(token);
        setUser(treatedUser);
      } catch (err) {
        deleteValue(SESSION_STORAGE_KEYS.USER_TOKEN);
      }
    }
  };

  const login = async ({ email, password }: Partial<UserLoginCredentials>) => {
    const { token } = await loginApi({ email, password });

    api.defaults.headers.authorization = `Bearer ${token}`;

    const user = await getUserData();

    const treatedUser = treatmentOverFetchedUser(user);

    setToken(token);
    setUser(treatedUser);

    saveValue(SESSION_STORAGE_KEYS.USER_TOKEN, JSON.stringify({ token }));

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

  const fetchUserData = async () => {
    const user = await getUserData();

    const treatedUser = treatmentOverFetchedUser(user);

    setUser(treatedUser);
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
        updateAddress,
        deleteAddress,
        fetchUserData,
      }}
    >
      {children}
    </GlobalUserContext.Provider>
  );
};
