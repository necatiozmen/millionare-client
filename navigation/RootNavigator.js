import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import Finish from '../screens/Finish/Finish';

const RootStackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: { header: ()=>null },
  },
  Home: {
    screen: Home,
    navigationOptions: { header: ()=>null },
  },
  Finish: {
    screen: Finish,
    navigationOptions: { header: ()=>null },
  },
},
);

export default function RootNavigator() {
  return <RootStackNavigator />;
}
