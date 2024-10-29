import { Reducer } from 'redux';
import { AuthActionTypes, AuthState, AuthTypes } from '../../types/auth/auth';

const initialState: AuthState = {
  isLoggedIn: true,
  authLoading: false,
  user: null
};

type ReducerType = Reducer<AuthState, AuthActionTypes>;

const reducer: ReducerType = (state, action: AuthActionTypes) => {
  state = state || initialState;

  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        authLoading: false,
        isLoggedIn: true,
        user: {
          ...action.user
        }
      };

    case AuthTypes.LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        authLoading: false,
        isLoggedIn: false,
        user: null
      };
    case AuthTypes.SET_LOADING:
      return {
        ...state,
        authLoading: action.loading
      };

    default:
      return state;
  }
};

export default reducer;
