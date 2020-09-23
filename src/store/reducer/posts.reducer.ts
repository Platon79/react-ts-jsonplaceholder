import { IPost, IAction } from '../../types';
import { SHOW_POSTS_LOADER, HIDE_POSTS_LOADER, SET_POSTS_LIST } from '../constants';

export interface IPostsState {
  loader: boolean,
  list: IPost[],
}

const initialState: IPostsState = {
  loader: false,
  list: []
};

export const postsReducer = (state: IPostsState = initialState, action: IAction): IPostsState => {
  switch (action.type) {
    case SHOW_POSTS_LOADER:
      return {
        ...state,
        loader: true,
      };
    case HIDE_POSTS_LOADER:
      return {
        ...state,
        loader: false,
      };
    case SET_POSTS_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
