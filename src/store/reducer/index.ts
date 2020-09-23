import {combineReducers} from 'redux';
import { usersReducer } from './users.reducer';
import { postsReducer } from './posts.reducer';

const reducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
});

export { reducer };