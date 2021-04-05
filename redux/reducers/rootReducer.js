import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import albumsReducer from './albumsReducer';

const allReducers = {
  postsReducer,
  usersReducer,
  albumsReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
