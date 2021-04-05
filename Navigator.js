import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomePage/Index';
import Users from './screens/Users/Index';
import PostDetails from './screens/PostsDetail/PostDetail';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Text from './components/Text';
import {Colors} from './assets/Colors';

const Tab = createBottomTabNavigator();

const Main = () => {
  const getTabLabel = (route, isFocused) => {
    if (route.name === 'Kişiler') return 'Users';
    else return route.name.toLocaleUpperCase('tr-TR');
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: Colors.Background,
        },
      }}
      backBehavior="history"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          tintColor = focused ? Colors.Share : 'grey';
          let choice = 'home';
          if (route.name === 'Kişiler') {
            choice = 'users';
          }
          return (
            <>
              <Icon
                style={{
                  color: tintColor,
                  alignSelf: 'center',
                  fontSize: focused ? 22 : 20,
                }}
                name={choice}
              />
            </>
          );
        },
      })}>
      <Tab.Screen name="Anasayfa" component={HomeScreen} />
      <Tab.Screen name="Kişiler" component={Users}></Tab.Screen>
    </Tab.Navigator>
  );
};

const Navigator = ({getScreen}) => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer
      onStateChange={state => {
        const index = state.index;
        const routes = state.routes[index];
        getScreen(routes.name);
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

        <Stack.Screen
          name="App"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="PostDetails" component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
