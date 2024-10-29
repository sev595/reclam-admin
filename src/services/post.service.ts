import axios from '../config/axios';

// Route to get all posts
export const getAllPostsService = async (): Promise<any> => {
  const url = `/api/admin/posts/all`;
  return axios.get(url);
};

// Route to create a new post
export const createPostService = async (postData: any): Promise<any> => {
  const url = `/api/admin/posts/create`;
  return axios.post(url, postData);
};

// Route to get a post by ID
export const getPostByIdService = async (postId: string): Promise<any> => {
  const url = `/api/admin/posts/${postId}`;
  const res = await axios.get(url);
  const {
    data: {
      data: { post }
    }
  } = res;
  return post;
};

// Route to update a post by ID
export const updatePostService = async (
  postId: string,
  postData: any
): Promise<any> => {
  const url = `/api/admin/posts/${postId}`;
  return axios.put(url, postData);
};

// Route to delete a post by ID
export const deletePostService = async (postId: string): Promise<any> => {
  const url = `/api/admin/posts/${postId}`;
  return axios.delete(url);
};

export const integratePostExcelFileService = async (
  file: File
): Promise<any> => {
  const formData = new FormData();
  formData.append('file', file);
  return axios.post('/api/admin/posts/integrate-excel', formData);
};
