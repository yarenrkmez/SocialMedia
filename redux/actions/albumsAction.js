import {AlbumsActions} from '../actionTypes';

export const setAlbums = data => ({
  type: AlbumsActions.SET_ALBUMS,
  data,
});
