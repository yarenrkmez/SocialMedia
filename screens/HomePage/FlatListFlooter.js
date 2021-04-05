import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
//redux
import {useDispatch, useSelector} from 'react-redux';
//components
import Text from '../../components/Text';
import {Colors} from '../../assets/Colors';

const FlatListFlooter = () => {
  const {finishPosts} = useSelector(state => state.postsReducer);

  return (
    <View style={styles.flooter}>
      {!finishPosts ? (
        <ActivityIndicator animating size="large" color={Colors.Share} />
      ) : (
        <Text title="Tüm postları görüntülediniz" style={{color: 'black'}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flooter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: Colors.Separator,
  },
});
export default FlatListFlooter;
