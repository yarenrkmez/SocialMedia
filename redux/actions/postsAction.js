import {HomePageActions} from '../actionTypes';

export const setPostsData = data => ({
  type: HomePageActions.POSTS,
  data,
});

export const setLoadingTrue = () => ({
  type: HomePageActions.SET_LOADING_TRUE,
});

export const setLoadingFalse = () => ({
  type: HomePageActions.SET_LOADING_FALSE,
});

export const setDetailLoadingTrue = () => ({
  type: HomePageActions.SET_DETAIL_LOADING_TRUE,
});

export const setDetailLoadingFalse = () => ({
  type: HomePageActions.SET_DETAIL_LOADING_FALSE,
});

export const setCurrentPage = data => ({
  type: HomePageActions.PAGE,
  data,
});

export const setPostsFinishTrue = () => ({
  type: HomePageActions.FINISH_POSTS_TRUE,
});

export const setPostsFinishFalse = () => ({
  type: HomePageActions.FINISH_POSTS_FALSE,
});

export const setPostDetail = data => ({
  type: HomePageActions.SET_POST_DETAIL,
  data,
});

export const setPostComments = data => ({
  type: HomePageActions.SET_POST_COMMENTS,
  data,
});

export const setCommentPage = data => ({
  type: HomePageActions.SET_COMMENT_PAGE,
  data,
});

export const setCommentLoadingTrue = () => ({
  type: HomePageActions.SET_COMMENT_LOADING_TRUE,
});

export const setCommentLoadingFalse = () => ({
  type: HomePageActions.SET_COMMENT_LOADING_FALSE,
});

export const setCommentsFinishTrue = () => ({
  type: HomePageActions.FINISH_COMMENTS_TRUE,
});

export const setCommentsFinishFalse = () => ({
  type: HomePageActions.FINISH_COMMENTS_FALSE,
});