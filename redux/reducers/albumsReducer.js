import {AlbumsActions} from '../actionTypes';

const initialState = {
  albums: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AlbumsActions.SET_ALBUMS:
      return {
        ...state,
        albums: action.data,
      };
    default:
      return state;
  }
};

export default postsReducer;
