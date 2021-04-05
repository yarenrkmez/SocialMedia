import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
//redux
import {useDispatch, useSelector} from 'react-redux';
//components
import Layout from '../../components/Layout';
import Separator from '../../components/Separator';
//local
import FlatListFlooter from './FlatListFlooter';
import PostCard from './PostCardView';
// const windowWidth = Dimensions.get('window').width;

const PostsView = ({loadingNewData}) => {
  const {posts} = useSelector(state => state.postsReducer);

  const renderPostCard = ({item}) => {
    return <PostCard item={item} goPostDetail />;
  };
  return (
    <Layout>
      <FlatList
        data={posts}
        renderItem={renderPostCard}
        keyExtractor={item => item.id}
        onEndReached={loadingNewData}
        onEndReachedThreshold={0}
        ListFooterComponent={FlatListFlooter}
        ItemSeparatorComponent={Separator}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
});
export default PostsView;
