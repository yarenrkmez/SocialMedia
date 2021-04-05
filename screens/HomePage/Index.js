//import liraries
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {
  setPostsData,
  setCurrentPage,
  setPostsFinishFalse,
  setPostsFinishTrue,
} from '../../redux/actions/postsAction';
import {setUsers} from '../../redux/actions/usersAction';
//api
import {getPosts} from '../../api/Posts';
import {getUsers} from '../../api/Users';
//components
import AppTopBar from '../../components/AppTopBar';
import Layout from '../../components/Layout';
//local
import PostsView from './PostsView';
import {Colors} from '../../assets/Colors';

const Index = () => {
  const dispatch = useDispatch();
  const {page, posts, finishPosts,usersLoading} = useSelector(state => state.postsReducer);

  useEffect(() => {
    getUsersFromApi();
  }, []);

  const getUsersFromApi = async () => {
    const allUsers = await getUsers();

    if (allUsers.status === 200) {
      dispatch(setUsers(allUsers.data));
    }
  };

  useEffect(() => {
    getPostsFromApi();
  }, [page]);

  const getPostsFromApi = async () => {
    const postsData = await getPosts(page);

    if (postsData.status === 200) {
      dispatch(setPostsData([...posts, ...postsData.data]));
      dispatch(setPostsFinishFalse());
    }
    if (postsData.data[0] === undefined) {
      dispatch(setPostsFinishTrue());
    }
  };

  //todo:to retrieve more data as it is scrolled
  const LoadMore = () => {
    !finishPosts && dispatch(setCurrentPage(page + 1));
  };

  return (
    <Layout style={styles.container}>
      <AppTopBar />
      <PostsView loadingNewData={LoadMore} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Background,
  },
});

export default Index;
