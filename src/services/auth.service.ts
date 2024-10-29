import axios from '../config/axios';

import { LoginData, RefreshToken } from './types';

export const loginRequest = async (loginData: LoginData): Promise<any> => {
  return axios.post('api/auth/login', { ...loginData });
};
export const logOutRequest = async (): Promise<any> => {
  return axios.post('api/auth/logout', {});
};

export const SignInByRefreshTocenRequest = async (
  refreshToken: RefreshToken
): Promise<any> => {
  return axios.post('api/auth/refresh-token', {
    ...refreshToken
  });
};
