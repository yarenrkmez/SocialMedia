import React from 'react';
import {StyleSheet, View, Platform, Dimensions} from 'react-native';
import Text from './Text';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../assets/Colors';
import Icon from 'react-native-vector-icons/Entypo';

const AppTopBar = ({isBack = false}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.flexContainer}>
      {isBack && (
        <Button
          onPress={() => {
            navigation.goBack(null);
          }}
          iconName="arrow-left"
          style={styles.backBtnStyle}
          iconSize={25}
          iconStyle={styles.backIcon}
        />
      )}
      <View style={styles.brand}>
        <Icon name="feather" size={18} style={styles.brandIcon} />
        <Text title="My Media" style={styles.brandName} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#4F7396',
    borderBottomWidth: 1,
    height: 44,
    borderBottomColor: '#4F7396',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtnStyle: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  backIcon: {
    color: Colors.Background,
  },
  brand: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  brandName: {
    color: Colors.Background,
    letterSpacing: 1.5,
    fontWeight: 'bold',
    fontSize: 15,    
  },
  brandIcon:{
    color: Colors.Background,
    alignSelf:'center',
    textDecorationLine:'underline',
  }
});
export default AppTopBar;
