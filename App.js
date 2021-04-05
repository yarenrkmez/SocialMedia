import React, {useState} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {StyleSheet, Text, View} from 'react-native';
import Index from './screens/HomePage/Index';
import Navigator from './Navigator';
let active = '';
const App = () => {
  // const [activeRoute, setActiveRoute] = useState(null);

  return (
    <Provider store={store}>
      <Navigator
        getScreen={activeScreen => {
          // setActiveRoute(activeScreen);
          active = activeScreen;
        }}
      />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
