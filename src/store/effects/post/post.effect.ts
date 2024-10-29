import { AppDispatch } from "../..";
import { NavigateFunction } from "react-router";
import {
  createPostService,
  deletePostService,
  getAllPostsService,
  getPostByIdService,
  updatePostService,
} from "src/services/post.service"; // Updated the import path accordingly
import {
  deletePostAction,
  getPostAction,
  getPostsAction,
} from "src/store/actions/post/post"; // Updated the import path accordingly
import { PostType } from "src/store/types/post/post"; // Updated the import path accordingly

// Effect function to get all posts
export const getAllPostsEffect = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getAllPostsService();
      const {
        data: {
          data: { posts },
        },
      } = result;

      dispatch(getPostsAction(posts));

      // Dispatch any action or store the posts data as needed
    } catch (error: any) {
      console.log(error);
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to create a new post
export const createPostEffect = (
  postData: PostType,
  navigate: NavigateFunction
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // You can dispatch actions before making the API call if needed
      const response = await createPostService(postData);
      const {
        data: {
          data: { post },
        },
      } = response;

      navigate(`/admin/posts/${post.id}`);

      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to get a post by ID
export const getPostByIdEffect = async (postId: string): Promise<any> => {
  try {
    const post = await getPostByIdService(postId);
    return post;
    // Dispatch any action or store the post data as needed
  } catch (error: any) {
    console.log(error);
  } finally {
    // Any cleanup code if needed
  }
};

// Effect function to update a post by ID
export const updatePostEffect = (
  postId: string,
  postData: PostType,
  navigate: NavigateFunction
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await updatePostService(postId, postData);
      const {
        data: {
          data: { post },
        },
      } = result;

      dispatch(getPostAction(post));
      navigate(`/admin/posts/${post.id}`);

      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to delete a post by ID
export const deletePostEffect = (postId: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      await deletePostService(postId);
      dispatch(deletePostAction(postId));

      // Handle success response as needed
    } catch (error: any) {
      console.log(error);

      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};
