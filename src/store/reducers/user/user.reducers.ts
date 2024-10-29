import { Reducer } from "redux";
import {
  UserActionTypes,
  UserServerTypes,
  UserState,
} from "src/store/types/user/user";
import { User } from "../../types/auth/auth";

const initialState: UserState = {
  userList: [],
  user: null,
};

type ReducerType = Reducer<UserState, UserActionTypes>;

const reducer: ReducerType = (state, action: UserActionTypes) => {
  state = state || initialState;

  switch (action.type) {
    case UserServerTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        userList: action.userList,
      };

    case UserServerTypes.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };

    case UserServerTypes.DELETE_USER_SUCCESS:
      const updatedUserList = state.userList.filter(
        (user) => user.id !== action.id
      );
      return {
        ...state,
        userList: updatedUserList,
      };

    default:
      return state;
  }
};

export default reducer;
