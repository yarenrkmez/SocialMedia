import React from 'react';
import {StyleSheet, View} from 'react-native';
//navigator
import {useNavigation} from '@react-navigation/native';
//Icon
import Icon from 'react-native-vector-icons/FontAwesome5';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {
  setPostComments,
  setCommentPage,
  setCommentsFinishFalse,
  setPostDetail,
  setCommentLoadingTrue,
} from '../../redux/actions/postsAction';
//assets
import {Colors} from '../../assets/Colors';
//components
import Text from '../../components/Text';
import Button from '../../components/Button';
import Sperator from '../../components/Separator';
import InteractionBar from '../../components/InteractionBar';

const PostCardView = ({item, goPostDetail}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {usersLoading, users} = useSelector(state => state.usersReducer);

  const findUserName = userId => {
    if (users !== undefined && userId !== undefined)
      return users.find(user => user.id === userId).username;
  };

  const goPostDetails = () => {
    navigation.navigate('PostDetails', {itemId: item.id});
    dispatch(setCommentPage(1));
    dispatch(setPostComments([]));
    dispatch(setCommentsFinishFalse());
    dispatch(setCommentLoadingTrue());
    dispatch(setPostDetail({}));
  };

  return (
    <>
      {!usersLoading && (
        <View style={styles.postCard} key={item.id}>
          <View style={styles.titleAndProfile}>
            <Icon name="user-circle" size={40} />
            <Text title={findUserName(item.userId)} style={{margin: 10}} />
          </View>
          <Sperator style={{marginTop: 10}} />

          {goPostDetail ? (
            <>
              <Button onPress={goPostDetails}>
                <Text title={item.title} />
                <Text
                  title={item.body}
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  style={styles.bodyText}
                />
              </Button>
              <InteractionBar />
            </>
          ) : (
            <>
              <Text title={item.title} />
              <Text
                title={item.body}
                style={[styles.bodyText, {marginBottom: 10}]}
              />
              <InteractionBar />
            </>
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  titleAndProfile: {
    flexDirection: 'row',
  },
  postCard: {
    flex: 1,
    flexDirection: 'column',
    margin: 15,
  },
  bodyText: {
    marginLeft: 3,
  },
});

export default PostCardView;
