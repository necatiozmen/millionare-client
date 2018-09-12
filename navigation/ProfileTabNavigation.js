import { createMaterialTopTabNavigator, createBottomTabNavigator} from 'react-navigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Test from '../screens/Test';

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
  Test: {
    screen: Test,
    navigationOptions: {
        tabBarLabel: 'TEST',
      },
  },
});
