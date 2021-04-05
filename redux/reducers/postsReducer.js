import {HomePageActions} from '../actionTypes';

const initialState = {
  posts: [],
  loading: true,
  page: 1,
  finishPosts: false,
  postDetail: {},
  postComments: [],
  commentPage: 1,
  commentLoading: true,
  finishComments: false,
  loadingDetail: true,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HomePageActions.POSTS:
      return {
        ...state,
        posts: action.data,
        loading: false,
      };
    case HomePageActions.SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case HomePageActions.SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case HomePageActions.SET_DETAIL_LOADING_TRUE:
      return {
        ...state,
        loadingDetail: true,
      };
    case HomePageActions.SET_DETAIL_LOADING_FALSE:
      return {
        ...state,
        loadingDetail: false,
      };
    case HomePageActions.PAGE:
      return {
        ...state,
        page: action.data,
      };
    case HomePageActions.FINISH_POSTS_TRUE:
      return {
        ...state,
        finishPosts: true,
      };
    case HomePageActions.FINISH_POSTS_FALSE:
      return {
        ...state,
        finishPosts: false,
      };
    case HomePageActions.SET_POST_DETAIL:
      return {
        ...state,
        postDetail: action.data,
        loadingDetail:false,
      };
    case HomePageActions.SET_POST_COMMENTS:
      return {
        ...state,
        postComments: action.data,
        commentLoading: false
      };
    case HomePageActions.SET_COMMENT_PAGE:
      return {
        ...state,
        commentPage: action.data,
        commentLoading:false,
      };
    case HomePageActions.SET_COMMENT_LOADING_TRUE:
      return {
        ...state,
        commentLoading: true,
      };
    case HomePageActions.SET_COMMENT_LOADING_FALSE:
      return {
        ...state,
        commentLoading: false,
      };
    case HomePageActions.FINISH_COMMENTS_TRUE:
      return {
        ...state,
        finishComments: true,
      };
    case HomePageActions.FINISH_COMMENTS_FALSE:
      return {
        ...state,
        finishComments: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
