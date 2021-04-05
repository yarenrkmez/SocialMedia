import {apiUrl} from './Common/Config';
import {get, post} from './Common/RequestHelper';

const postsUrl = `${apiUrl}posts`;

export const getPosts = request => {
  return get(`${postsUrl}?_limit=10&_page=${request}`);
};

export const getPostsDetail = request => {
  return get(`${postsUrl}/${request}`);
};

export const getPostComments = (id, page) => {
  return get(`${postsUrl}/${id}/comments?_limit=3&_page=${page}`);
};

export const getUserPost = id => {
  return get(`${postsUrl}/?userId=${id}`);
};

export const getAllPosts = () => {
  return get(postsUrl);
};