import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Text from '../../components/Text';
import {Colors} from '../../assets/Colors';

const FlatListFlooterComment = () => {
  const {finishComments} = useSelector(state => state.postsReducer);

  return (
    <View style={styles.flooter}>
      {!finishComments ? (
        <ActivityIndicator animating size="large" color={Colors.Share}  />
      ) : (
        <Text title="Tüm yorumları görüntülediniz" style={{color: 'black'}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderTopWidth: 1,
    borderTopColor:Colors.Separator
  },
});
export default FlatListFlooterComment;
