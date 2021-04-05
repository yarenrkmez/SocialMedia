import {UsersActions} from '../actionTypes';

const initialState = {
  users: [],
  usersLoading: true,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UsersActions.SET_USERS:
      return {
        ...state,
        users: action.data,
        usersLoading: false,
      };
    case UsersActions.SET_USER_LOADING_FALSE:
      return {
        ...state,
        usersLoading: false,
      };
    case UsersActions.SET_USER_LOADING_TRUE:
      return {
        ...state,
        usersLoading: true,
      };
    default:
      return state;
  }
};

export default postsReducer;
