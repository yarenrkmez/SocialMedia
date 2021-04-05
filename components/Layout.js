import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const Layout = ({children, noSafeArea, style}) => {
  const Container = noSafeArea ? View : SafeAreaView;
  return <Container style={{flex: 1, ...style}}>{children}</Container>;
};

export default Layout;
