import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Finish from '../screens/Finish';
import ProfileTabNavigation from './ProfileTabNavigation';

const RootStackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{ header:()=>null }
  },
  Home: {
    screen: Home,
    navigationOptions:{ header:()=>null }

  },
  Finish: {
    screen: Finish,
    navigationOptions:{ header:()=>null }
  },

  Profile: {
    screen: ProfileTabNavigation,
  },

},
// {
//   initialRouteName: 'Home',
// }
);

export default function RootNavigator() {
  return <RootStackNavigator />;
}
