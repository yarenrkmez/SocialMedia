import {UsersActions} from '../actionTypes';

export const setUsers = data => ({
  type: UsersActions.SET_USERS,
  data,
});

export const setUsersLoadingFalse = () => ({
  type: UsersActions.SET_USER_LOADING_FALSE,
});

export const setUsersLoadingTrue = () => ({
  type: UsersActions.SET_USER_LOADING_TRUE,
});
