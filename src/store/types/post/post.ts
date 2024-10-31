export enum PostServerTypes {
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  GET_POST_SUCCESS = 'GET_POST_SUCCESS',
  DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
}

export interface PostType {
  id?: string;
  title?: string;
  description?: string;
  featureImg?: string;
  postFormat?: string;
  slidePost?: boolean;
  date?: string; // Assuming date as string for easier serialization, can be Date if handled as Date objects
  slug?: string;
  featured?: boolean;
}

export interface PostState {
  postList: PostType[];
  post: PostType | null;
}

export interface getPostsActionType {
  type: PostServerTypes.GET_POSTS_SUCCESS;
  postList: PostType[];
}

export interface getPostActionType {
  type: PostServerTypes.GET_POST_SUCCESS;
  post: PostType;
}

export interface deletePostActionType {
  type: PostServerTypes.DELETE_POST_SUCCESS;
  id: string;
}

export type PostActionTypes =
  | getPostsActionType
  | getPostActionType
  | deletePostActionType;
