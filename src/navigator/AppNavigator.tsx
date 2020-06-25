import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MobileList from '../screens/MobileListScreen';
import Home from '../screens/HomeScreen';
import Login from '../screens/login/LoginScreen';
import LoginSuccess from '../screens/login/LoginSuccessPage';
import ActorDetail from '../screens/login/ActorDetailScreen';
import FruitList from '../screens/fruitlist/FruitListScreen';
import FruitDisplay from '../screens/fruitlist/FruitDisplayScreen';
import Calculator from '../screens/calculator/CalculatorScreen';

const HomeStackNavigator = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        name="Home"
        component={Home}
        options={{title: 'Home'}}
      />
    </HomeStackNavigator.Navigator>
  );
};

const MobileListStackNavigator = createStackNavigator();

export const MobileListNavigator = () => {
  return (
    <MobileListStackNavigator.Navigator>
      <MobileListStackNavigator.Screen
        name="MobileList"
        component={MobileList}
        options={{title: 'Mobile List'}}
      />
    </MobileListStackNavigator.Navigator>
  );
};

const LoginStackNavigator = createStackNavigator();

export const LoginNavigator = () => {
  return (
    <LoginStackNavigator.Navigator>
      <LoginStackNavigator.Screen
        name="Login"
        component={Login}
        options={{title: 'Mobile List'}}
      />
      <LoginStackNavigator.Screen
        name="LoginSuccess"
        component={LoginSuccess}
        options={{title: 'Login Success'}}
      />
      <LoginStackNavigator.Screen name="ActorDetail" component={ActorDetail} />
    </LoginStackNavigator.Navigator>
  );
};

const FruitStackNavigator = createStackNavigator();

export const FruitNavigator = () => {
  return (
    <FruitStackNavigator.Navigator>
      <FruitStackNavigator.Screen
        name="FruitList"
        component={FruitList}
        options={{title: 'Fruit List'}}
      />
      <FruitStackNavigator.Screen
        name="FruitDisplay"
        component={FruitDisplay}
        options={{title: 'Fruit'}}
      />
    </FruitStackNavigator.Navigator>
  );
};

const CalculatorStackNavigator = createStackNavigator();

export const CalculatorNavigator = () => {
  return (
    <CalculatorStackNavigator.Navigator>
      <CalculatorStackNavigator.Screen
        name="Calculator"
        component={Calculator}
        options={{title: 'Calculator'}}
      />
    </CalculatorStackNavigator.Navigator>
  );
};
