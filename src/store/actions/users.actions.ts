import { fetchUsers } from '../../api/api';
import {
  SHOW_USERS_LOADER,
  HIDE_USERS_LOADER,
  SET_USERS_LIST,
} from '../constants';

export function getUsers() {
  return (dispatch: any): void => {
    dispatch({ type: SHOW_USERS_LOADER });
    fetchUsers().then((response) => {
        dispatch({
          type: SET_USERS_LIST,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch({ type: HIDE_USERS_LOADER });
      });
  }
};
