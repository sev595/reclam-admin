import axios from 'axios';
import { SignInByRefreshTocenRequest } from '../services/auth.service';
import { apiBaseUrl } from './index';
import { store } from '../store';
import { logOutEffect } from '../store/effects/auth/auth.effects';

const instance = axios.create({
  baseURL: apiBaseUrl
});

instance.interceptors.request.use(function (config: any) {
  const token = localStorage.getItem('accessToken');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  config.headers.admin = 'FTS';

  return config;
});

// Also add/ configure interceptors && all the other cool stuff
instance.interceptors.response.use(
  (response) => response,
  async (err) => {
    console.log('err.response?.status', err.response?.status);

    if (
      err.response?.status === 401 &&
      !err.config.alreadyRetried &&
      err.config.url !== 'api/v1/auth/login'
    ) {
      try {
        const userRefreshToken = localStorage.getItem('refreshToken');
        const res = await SignInByRefreshTocenRequest({
          refreshToken: userRefreshToken
        });

        const { access_token, refresh_token } = res.data;
        if (refresh_token) {
          await localStorage.setItem('accessToken', access_token);
          await localStorage.setItem('refreshToken', refresh_token);
          err.config.alreadyRetried = true;
          err.config.headers.Authorization = `Bearer ${access_token}`;
          return await instance.request(err.config);
        }
      } catch (err: any) {
        store.dispatch(logOutEffect() as any);
      }
    }
    return Promise.reject(err);
  }
);
export default instance;
