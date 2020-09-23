import axios from 'axios';
import { IUser, IPost, IComment } from '../types';

const API_HOST = 'https://jsonplaceholder.typicode.com';

type TResponse<T> = {
  data: T,
};

export const fetchUsers = (): Promise<TResponse<IUser[]>> => { // should I declare promise here?
  return axios.get(`${API_HOST}/users`);
};

export const fetchUser = (id: string): Promise<TResponse<IUser>> => {
  return axios.get(`${API_HOST}/users?id=${id}`);
};

export const fetchPosts = (): Promise<TResponse<IPost[]>> => {
  return axios.get(`${API_HOST}/posts`);
};

export const fetchUserPosts = (userId: string): Promise<TResponse<IPost[]>> => {
  return axios.get(`${API_HOST}/posts?userId=${userId}`);
};

export const fetchComments = (): Promise<TResponse<IComment[]>> => {
  return axios.get(`${API_HOST}/comments`);
};

export const fetchPostComments = (postId: string): Promise<TResponse<IComment[]>> => {
  return axios.get(`${API_HOST}/comments?postId=${postId}`);
};
