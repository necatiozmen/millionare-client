import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Finish from '../screens/Finish';

export default createBottomTabNavigator({

  Giris: {
    screen: Login,
    navigationOptions: {
        tabBarLabel: 'GIRIS',
      },
  },
  Ana: {
    screen: Home,
    navigationOptions: {
        tabBarLabel: 'ANA',
      },
  },
  Finish: {
    screen: Finish,
    navigationOptions: {
        tabBarLabel: 'TEST',
      },
  },
});
