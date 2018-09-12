import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Test from '../screens/Test';
import ProfileTabNavigation from './ProfileTabNavigation';



const RootStackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Test: {
    screen: Test,
    navigationOptions: {
      title: 'Test',
    },
  },

  Profile: {
    screen: ProfileTabNavigation,
  },

},
{
  initialRouteName: 'Home',
});

export default function RootNavigator() {
  return <RootStackNavigator />;
}
