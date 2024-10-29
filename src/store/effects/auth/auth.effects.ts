import { NavigateFunction } from 'react-router-dom';
import { AppDispatch } from '../..';
import { loginRequest, logOutRequest } from '../../../services/auth.service';
import { LoginData } from '../../../services/types';
import {
  loginRequestSuccess,
  logOutRequestSuccess,
  setLoading
} from '../../actions/auth/auth.actions';

export const loginEffect = (
  loginData: LoginData,
  navigate: NavigateFunction,
  addToast: any
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingEffect(true));
      // Get user
      const result = await loginRequest(loginData);
      const {
        data: { access_token, refresh_token, user }
      } = result;

      await localStorage.setItem('accessToken', access_token);
      await localStorage.setItem('refreshToken', refresh_token);

      dispatch(loginRequestSuccess(user));

      navigate('/admin/users');
    } catch (error: any) {
      console.log(error.response?.data);

      addToast(error.response?.data?.message, { appearance: 'error' });
    } finally {
      dispatch(setLoadingEffect(false));
    }
  };
};
export const setLoadingEffect = (loading: boolean): any => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(loading));
  };
};

const test = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.log(err);
  }
};

export const logOutEffect = (): any => {
  return async (dispatch: AppDispatch, navigate: NavigateFunction) => {
    try {
      dispatch(setLoadingEffect(true));
      // Get user
      await logOutRequest();
      test();

      dispatch(logOutRequestSuccess());
    } catch (error: any) {
    } finally {
      dispatch(setLoadingEffect(false));
    }
  };
};
