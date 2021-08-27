import { AxiosRequestConfig } from 'axios';
import ResponseErrorHandler from '../utils/api/error';
import api from './api';

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

export const resetUserPasswordChallenge = async (
  email: string,
): Promise<ResetPasswordCredentialsChallengeResponse> => {
  try {
    const { data } = await api.post<ResetPasswordCredentialsChallengeResponse>(
      `${customerURL}/sendlink_resetpassword`,
      {
        email,
      },
      requestConfig,
    );

    return data;
  } catch (err) {
    throw new ResponseErrorHandler(err);
  }
};

export const resetUserPassword = async ({
  password,
  token,
}: Partial<ResetPassword>): Promise<ResetPasswordResponse> => {
  try {
    const { data } = await api.post<ResetPasswordResponse>(
      `${customerURL}/reset_password?token=${token}`,
      {
        password,
      },
      requestConfig,
    );

    return data;
  } catch (err) {
    throw new ResponseErrorHandler(err);
  }
};

export const getUserData = async (): Promise<UserData> => {
  try {
    const { data } = await api.get<UserData>(customerURL);

    return data;
  } catch (err) {
    throw new ResponseErrorHandler(err);
  }
};

export const createUserAddress = async (
  address: CreateUserAddress,
): Promise<void> => {
  try {
    await api.post<void>(`${customerURL}/address`, address);
  } catch (err) {
    throw new ResponseErrorHandler(err);
  }
};
