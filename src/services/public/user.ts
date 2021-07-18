import { AxiosRequestConfig } from 'axios';
import ResponseErrorHandler from '../../utils/api/error';
import api from '../api';

const customerURL = '/customers';

const requestConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const login = async ({
  email,
  password,
}: Partial<UserLoginCredentials>): Promise<LoggedUserResponse> => {
  try {
    const { data } = await api.post<LoggedUserResponse>(
      `${customerURL}/auth`,
      {
        email,
        password,
      },
      requestConfig,
    );

    return data;
  } catch (err) {
    throw new ResponseErrorHandler(err);
  }
};

export const createUser = async ({
  email,
  password,
  name,
}: Partial<UserSignupCredentials>): Promise<CreatedUserResponse> => {
  try {
    const { data } = await api.post<CreatedUserResponse>(
      `${customerURL}`,
      {
        name,
        email,
        password,
      },
      requestConfig,
    );

    return data;
  } catch (err) {
    throw new ResponseErrorHandler(err);
  }
};
