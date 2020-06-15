import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentScreen from "./src/screens/ComponentScreen";

const navigator = createStackNavigator(
  {
    Components: ComponentScreen    
  },
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "Practice"
    }
  }
);

export default createAppContainer(navigator);