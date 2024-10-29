import {
  UserServerTypes,
  UserType,
  deleteUserActionType,
  getUserActionType,
  getUsersActionType
} from 'src/store/types/user/user';

export const getUsersAction = (userList: UserType[]): getUsersActionType => ({
  type: UserServerTypes.GET_USERS_SUCCESS,
  userList
});

export const getUserAction = (user: UserType): getUserActionType => ({
  type: UserServerTypes.GET_USER_SUCCESS,
  user
});

export const delelteUserAction = (id: string): deleteUserActionType => ({
  type: UserServerTypes.DELETE_USER_SUCCESS,
  id
});
