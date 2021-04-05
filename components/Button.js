//rnfs

import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Text from './Text';
import Icon from 'react-native-vector-icons/Entypo';

const Button = props => {
  const {title, titleStyle, children, iconName, iconStyle, iconSize} = props;
  return (
    <TouchableOpacity {...props}>
      {children}
      <View style={{flexDirection: 'row'}}>
        {iconName && <Icon name={iconName} size={iconSize} style={iconStyle} />}
        <Text title={title} style={titleStyle} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
export default Button;
