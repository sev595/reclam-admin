import {
  AuthTypes,
  iSetLoadingAction,
  LoginRequestSuccess,
  LogOutRequestSuccess,
  User
} from '../../types/auth/auth';

export const loginRequestSuccess = (user: User): LoginRequestSuccess => ({
  type: AuthTypes.LOGIN_REQUEST_SUCCESS,
  user
});

export const logOutRequestSuccess = (): LogOutRequestSuccess => ({
  type: AuthTypes.LOGOUT_REQUEST_SUCCESS
});

export const setLoading = (loading: boolean): iSetLoadingAction => ({
  type: AuthTypes.SET_LOADING,
  loading
});
