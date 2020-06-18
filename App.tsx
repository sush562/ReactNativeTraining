import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import MobileListScreen from './src/screens/MobileListScreen'

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(0,255,0)',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home Screen' }}

        />
        <Stack.Screen name='MobileList' component={MobileListScreen} options={{ title: 'Mobile List' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}