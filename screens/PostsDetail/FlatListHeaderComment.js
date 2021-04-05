import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
//redux
import {useSelector} from 'react-redux';
//local
import PostCard from '../HomePage/PostCardView';
import {Colors} from '../../assets/Colors';


const FlatListHeaderComment = () => {
  
  const {loadingDetail, postDetail} = useSelector(state => state.postsReducer);

  return (
    <View style={styles.flooter}>
      {!loadingDetail ? (
        <PostCard item={postDetail} />
      ) : (
        <ActivityIndicator animating size="large" color={Colors.Share}  />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flooter: {
    display: 'flex',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor:Colors.Separator
  },
});
export default FlatListHeaderComment;
