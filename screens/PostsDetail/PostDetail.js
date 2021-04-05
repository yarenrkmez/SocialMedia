import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View, FlatList} from 'react-native';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {
  setPostDetail,
  setPostComments,
  setCommentLoadingFalse,
  setCommentLoadingTrue,
  setCommentPage,
  setCommentsFinishFalse,
  setCommentsFinishTrue,
} from '../../redux/actions/postsAction';
//api
import {getPostsDetail, getPostComments} from '../../api/Posts';
//components
import Separator from '../../components/Separator';
import AppTopBar from '../../components/AppTopBar';
import Layout from '../../components/Layout';
//local
import PostComment from './PostComment';
import FlatListFlooterComment from './FlatListFlooterComment';
import FlatListHeaderComment from './FlatListHeaderComment';
//asset
import {Colors} from '../../assets/Colors';

const PostDetail = props => {
  const [postId, setPostId] = useState(props.route.params.itemId);
  const dispatch = useDispatch();
  const {
    postComments,
    commentPage,
    commentLoading,
    finishComments,
  } = useSelector(state => state.postsReducer);

  useEffect(() => {
    getPostDetailFromApi();
  }, []);

  useEffect(() => {
    !finishComments && getPostCommentsFromApi();
  }, [commentPage, postId]);

  const getPostDetailFromApi = async () => {
    const postDetail = await getPostsDetail(postId);

    if (postDetail.status === 200) {
      dispatch(setPostDetail(postDetail.data));
    }
  };

  const getPostCommentsFromApi = async () => {
    dispatch(setCommentsFinishFalse());

    const postCommentsData = await getPostComments(postId, commentPage);

    if (postCommentsData.status === 200) {
      dispatch(setPostComments([...postComments, ...postCommentsData.data]));
    }
    if (postCommentsData.data[0] === undefined) {
      dispatch(setCommentsFinishTrue());
    }
  };

  const loadMore = () => {
    !finishComments && dispatch(setCommentPage(commentPage + 1));
  };

  const renderPostComment = ({item}) => {
    return <PostComment item={item} />;
  };


  return (
    <Layout style={styles.flexConteiner}>
      <AppTopBar isBack />

      {!commentLoading ? (
        <FlatList
          data={postComments}
          renderItem={renderPostComment}
          keyExtractor={item => item.id}
          onEndReached={loadMore}
          onEndReachedThreshold={0}
          ItemSeparatorComponent={Separator}
          ListHeaderComponent={FlatListHeaderComment}
          ListFooterComponent={FlatListFlooterComment}
          extraData={postId}
        />
      ) : (
        <ActivityIndicator animating size="large" color={Colors.Share} />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  flexConteiner: {
    flex: 1,
    flexDirection: 'column',
  },
});
export default PostDetail;
