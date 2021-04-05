import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Share, TextInput} from 'react-native';
//assets
import {Colors} from '../assets/Colors';
//components
import Button from '../components/Button';
import Text from '../components/Text';

const InteractionBar = () => {
  const [isLiked, setLiked] = useState(false);
  const [isRepost, setRepost] = useState(false);
  const [textInput, onChangeText] = useState('share your comment');
  const [isComment, setComment] = useState(false);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'hey u should see this post ',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button
          iconName="heart"
          iconSize={25}
          onPress={() => setLiked(prev => !prev)}
          iconStyle={{color: isLiked ? 'red' : 'grey'}}
          title={isLiked ? 1 : 0}
          titleStyle={{marginLeft: 2}}
        />

        <Button
          iconName="share"
          iconSize={25}
          onPress={onShare}
          iconStyle={{color: 'grey'}}
        />
        <Button
          iconName="retweet"
          iconSize={25}
          onPress={() => setRepost(prev => !prev)}
          iconStyle={{color: isRepost ? 'green' : 'grey'}}
          title={isRepost ? 1 : 0}
          titleStyle={{marginLeft: 2}}
        />
        <Button
          iconName="typing"
          iconSize={25}
          iconStyle={{color: isComment ? 'blue' : 'grey'}}
          onPress={() => setComment(prev => !prev)}
        />
      </View>
      {isComment && (
        <View style={{flexDirection: 'column'}}>
          <TextInput
            multiline
            numberOfLines={4}
            onChangeText={text => onChangeText(text)}
            value={textInput}
          />
          <Button
            iconName="arrow-right"
            iconSize={35}
            style={styles.commentShare}
            iconStyle={styles.commentShareIcon}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  commentShare: {
    alignSelf: 'flex-end',
  },
  commentShareIcon: {
    color: Colors.Share,
  },
});
export default InteractionBar;
