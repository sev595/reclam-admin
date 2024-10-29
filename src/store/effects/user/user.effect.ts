import { AppDispatch } from "../..";
import { NavigateFunction } from "react-router";
import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
} from "src/services/user.service";
import {
  delelteUserAction,
  getUserAction,
  getUsersAction,
} from "src/store/actions/user/user";
import { UserType } from "src/store/types/user/user";

// Effect function to get all users
export const getAllUsersEffect = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getAllUsersService();
      const {
        data: {
          data: { users },
        },
      } = result;

      dispatch(getUsersAction(users));
    } catch (error: any) {
      console.log(error);
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to create a new user
export const createUserEffect = (
  userData: UserType,
  setLoading: any,
  addToast: any,
  navigate: NavigateFunction
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      await createUserService(userData);
      navigate("/admin/users");
    } catch (error: any) {
      const message = error?.response?.data?.message;
      addToast(message, { appearance: "error" });
    } finally {
      setLoading(false);
    }
  };
};

export const getUserByIdEffect = async (userId: string): Promise<any> => {
  try {
    const user = await getUserByIdService(userId);
    return user;
  } catch (error: any) {
    throw new Error();
  }
};

// Effect function to update a user by ID
export const updateUserEffect = (
  userId: string,
  userData: UserType,
  navigate: NavigateFunction
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await updateUserService(userId, userData);
      const {
        data: {
          data: { user },
        },
      } = result;

      dispatch(getUserAction(user));
      navigate(`/admin/users/${user.id}`);

      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to delete a user by ID
export const deleteUserEffect = (userId: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      await deleteUserService(userId);
      dispatch(delelteUserAction(userId));
      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};
