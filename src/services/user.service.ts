import axios from '../config/axios';

// Route to get all users
export const getAllUsersService = async (): Promise<any> => {
  const url = `/api/admin/users/all`;
  return axios.get(url);
};

// Route to create a new user
export const createUserService = async (userData: any): Promise<any> => {
  const url = `/api/admin/users/create`;
  return axios.post(url, userData);
};

// Route to get a user by ID
export const getUserByIdService = async (userId: string): Promise<any> => {
  const url = `/api/admin/users/${userId}`;
  const res = await axios.get(url);
  const {
    data: {
      data: { user }
    }
  } = res;
  return user;
};

// Route to update a user by ID
export const updateUserService = async (
  userId: string,
  userData: any
): Promise<any> => {
  const url = `/api/admin/users/${userId}`;
  return axios.put(url, userData);
};

// Route to delete a user by ID
export const deleteUserService = async (userId: string): Promise<any> => {
  const url = `/api/admin/users/${userId}`;
  return axios.delete(url);
};
