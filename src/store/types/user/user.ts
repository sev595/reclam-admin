export enum UserServerTypes {
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
}

export interface UserType {
  id?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  password?: string;
  role?: string;
  emailVerified?: string;
  address:string
}

export interface UserState {
  userList: UserType[];
  user: UserType | null;
}

export interface getUsersActionType {
  type: UserServerTypes.GET_USERS_SUCCESS;
  userList: UserType[];
}

export interface getUserActionType {
  type: UserServerTypes.GET_USER_SUCCESS;
  user: UserType;
}

export interface deleteUserActionType {
  type: UserServerTypes.DELETE_USER_SUCCESS;
  id: string;
}

export type UserActionTypes =
  | getUsersActionType
  | getUserActionType
  | deleteUserActionType;
