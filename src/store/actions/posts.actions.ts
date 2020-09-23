import { fetchUserPosts } from '../../api/api';
import {
  SHOW_POSTS_LOADER,
  HIDE_POSTS_LOADER,
  SET_POSTS_LIST,
} from '../constants';

export function getPosts(userId: string) {
  return (dispatch: any): void => {
    dispatch({ type: SHOW_POSTS_LOADER });
    fetchUserPosts(userId).then((response) => {
        dispatch({
          type: SET_POSTS_LIST,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch({ type: HIDE_POSTS_LOADER });
      });
  }
};
