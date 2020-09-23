import { IUser, IAction } from '../../types';
import { SHOW_USERS_LOADER, HIDE_USERS_LOADER, SET_USERS_LIST } from '../constants';

export interface IUsersState {
  loader: boolean,
  list: IUser[],
}

const initialState: IUsersState = {
  loader: false,
  list: []
};

export const usersReducer = (state: IUsersState = initialState, action: IAction): IUsersState => {
  switch (action.type) {
    case SHOW_USERS_LOADER:
      return {
        ...state,
        loader: true,
      };
    case HIDE_USERS_LOADER:
      return {
        ...state,
        loader: false,
      };
    case SET_USERS_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
