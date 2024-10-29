export enum AuthTypes {
  LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS',
  LOGOUT_REQUEST_SUCCESS = 'LOGOUT_REQUEST_SUCCESS',
  SET_LOADING = 'SET_LOADING'
}

export interface AuthState {
  isLoggedIn: boolean;
  authLoading: boolean;
  user: User | null;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string;
  role: string;
  orders?: any[];
  googleId?: string;
  emailVerified?: boolean;
}

export interface LoginRequestSuccess {
  type: AuthTypes.LOGIN_REQUEST_SUCCESS;
  user: User;
}

export interface LogOutRequestSuccess {
  type: AuthTypes.LOGOUT_REQUEST_SUCCESS;
}
export interface iSetLoadingAction {
  type: AuthTypes.SET_LOADING;
  loading: boolean;
}

export type AuthActionTypes =
  | LoginRequestSuccess
  | iSetLoadingAction
  | LogOutRequestSuccess;
