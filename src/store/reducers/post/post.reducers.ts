import { Reducer } from "redux";
import {
  PostActionTypes,
  PostServerTypes,
  PostState,
} from "src/store/types/post/post"; // Updated the import path accordingly
import { PostType } from "src/store/types/post/post";

const initialState: PostState = {
  postList: [],
  post: null,
};

type ReducerType = Reducer<PostState, PostActionTypes>;

const reducer: ReducerType = (state, action: PostActionTypes) => {
  state = state || initialState;

  switch (action.type) {
    case PostServerTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        postList: action.postList,
      };

    case PostServerTypes.GET_POST_SUCCESS:
      return {
        ...state,
        post: action.post,
      };

    case PostServerTypes.DELETE_POST_SUCCESS:
      const updatedPostList = state.postList.filter(
        (post: PostType) => post.id !== action.id
      );
      return {
        ...state,
        postList: updatedPostList,
      };

    default:
      return state;
  }
};

export default reducer;
