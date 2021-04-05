import React from 'react';
import {StyleSheet, View} from 'react-native';
//Icon
import Icon from 'react-native-vector-icons/FontAwesome5';
//components
import Text from '../../components/Text';
import InteractionBar from '../../components/InteractionBar';

const PostComment = ({item}) => {
  return (
    <View style={styles.postCard} key={item.id}>
      <View style={styles.titleAndProfile}>
        <Icon name="user-circle" size={30} />
        <Text
          title={`  ${item.name.split(' ')[0]} ${item.name.split(' ')[1]}...`}
        />
        <Text title={`@${item.email}`} style={styles.email} />
      </View>
      <Text title={item.body} style={styles.bodyText} />
      <InteractionBar />
    </View>
  );
};

const styles = StyleSheet.create({
  titleAndProfile: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  postCard: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
  },
  bodyText: {
    marginLeft: 15,
    marginBottom: 10,
  },
  email: {
    marginLeft: 5,
    color: 'grey',
  },
});
export default PostComment;
