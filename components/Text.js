import React from 'react';
import {Text as RnText, View} from 'react-native';

const Text = (props) => {
  const {title,style}=props;
  return (
    <View>
      <RnText {...props} style={style}>{title}</RnText>
    </View>
  );
};


export default Text;
