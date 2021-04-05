import {apiUrl} from './Common/Config';
import {get, post} from './Common/RequestHelper';

const usersUrl = `${apiUrl}users`;

export const getUsers = () => {
  return get(usersUrl);
};
