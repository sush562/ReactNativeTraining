import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  MobileListNavigator,
  HomeNavigator,
  LoginNavigator,
  FruitNavigator,
  CalculatorNavigator,
} from '../navigator/AppNavigator';

class Main extends React.Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeNavigator} />
          <Drawer.Screen name="Mobile List" component={MobileListNavigator} />
          <Drawer.Screen name="Login" component={LoginNavigator} />
          <Drawer.Screen name="Fruit List" component={FruitNavigator} />
          <Drawer.Screen name="Calculator" component={CalculatorNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default Main;
