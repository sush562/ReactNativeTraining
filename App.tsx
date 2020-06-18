import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import MobileListScreen from './src/screens/MobileListScreen';
import LoginScreen from './src/screens/LoginScreen';
import LoginSuccess from './src/screens/LoginSuccessPage';

export default function App() {
  const Stack = createStackNavigator();
  const myOptions = {
    title: 'Home Page',
    headerStyle: {
      backgroundColor: 'rgb(0,255,0)',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={myOptions} />
        <Stack.Screen
          name="MobileList"
          component={MobileListScreen}
          options={{...myOptions, title: 'Mobile List'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{...myOptions, title: 'Login'}}
        />
        <Stack.Screen
          name="LoginSuccess"
          component={LoginSuccess}
          options={{...myOptions, title: 'Login Success'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
