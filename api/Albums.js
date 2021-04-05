import {apiUrl} from './Common/Config';
import {get, post} from './Common/RequestHelper';

const albumsUrl = `${apiUrl}albums`;

export const getUserAlbums = id => {
  return get(`${albumsUrl}/?userId=${id}`);
};

export const getAllAlbums = () => {
  return get(albumsUrl);
};
