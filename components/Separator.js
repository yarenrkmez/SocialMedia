import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../assets/Colors';

const Separator = ({style}) => {
  return <View style={[styles.separator,style]} />;
};

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: Colors.Separator,
    borderBottomWidth: 1,
  },
});
export default Separator;
