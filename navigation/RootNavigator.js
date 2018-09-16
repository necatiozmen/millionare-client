import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Finish from '../screens/Finish';
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
  Finish: {
    screen: Finish,
    navigationOptions: {
      title: 'Finish',
    },
  },

  Profile: {
    screen: ProfileTabNavigation,
  },

},
{
  initialRouteName: 'Home',
}
);

export default function RootNavigator() {
  return <RootStackNavigator />;
}
