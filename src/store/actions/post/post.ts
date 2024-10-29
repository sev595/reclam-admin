import {
  PostServerTypes,
  PostType,
  deletePostActionType,
  getPostActionType,
  getPostsActionType
} from 'src/store/types/post/post';

export const getPostsAction = (postList: PostType[]): getPostsActionType => ({
  type: PostServerTypes.GET_POSTS_SUCCESS,
  postList
});

export const getPostAction = (post: PostType): getPostActionType => ({
  type: PostServerTypes.GET_POST_SUCCESS,
  post
});

export const deletePostAction = (id: string): deletePostActionType => ({
  type: PostServerTypes.DELETE_POST_SUCCESS,
  id
});
