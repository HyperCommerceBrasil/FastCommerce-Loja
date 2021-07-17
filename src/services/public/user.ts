import { AxiosRequestConfig } from 'axios';
import api from '../api';

// const baseURLPublic = '/public';

export const login = async ({
  email,
  password,
}: Partial<UserCredentials>): Promise<LoggedUserResponse> => {
  const requestConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { data } = await api.post<LoggedUserResponse>(
    `/auth`,
    {
      email,
      password,
    },
    requestConfig,
  );

  return data;
};
