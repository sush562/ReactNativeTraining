import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import MobileListScreen from './src/screens/MobileListScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    MobileList: MobileListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Home',
    },
  },
);

export default createAppContainer(navigator);
