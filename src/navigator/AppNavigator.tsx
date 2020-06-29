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
import PlayList from '../screens/apicall/PlayListScreen';
import PushNotification from '../screens/notification/PushNotificationScreen';
import LocalNotification from '../screens/notification/LocalNotificationScreen';
import Camera from '../screens/camera/CameraScreen';
import CameraDisplay from '../screens/camera/CameraDisplayScreen';
import BeaconImage from '../screens/beacon/BeaconImageScreen';
import DateTime from '../screens/datetime/DateTimePickerScreen';
import GeoLocation from '../screens/geolocation/GeoLocationScreen';

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

const PlaylistStackNavigator = createStackNavigator();

export const PlaylistNavigator = () => {
  return (
    <PlaylistStackNavigator.Navigator>
      <PlaylistStackNavigator.Screen
        name="Playlist"
        component={PlayList}
        options={{title: 'Playlist'}}
      />
    </PlaylistStackNavigator.Navigator>
  );
};

const NotificationStackNavigator = createStackNavigator();

export const NotificationNavigator = () => {
  return (
    <CalculatorStackNavigator.Navigator>
      <CalculatorStackNavigator.Screen
        name="LocalNotification"
        component={LocalNotification}
        options={{title: 'Local Notification'}}
      />
      <CalculatorStackNavigator.Screen
        name="PushNotification"
        component={PushNotification}
        options={{title: 'Push Notification'}}
      />
    </CalculatorStackNavigator.Navigator>
  );
};

const CameraStackNavigator = createStackNavigator();

export const CameraNavigator = () => {
  return (
    <CameraStackNavigator.Navigator>
      <CameraStackNavigator.Screen
        name="CameraPage"
        component={Camera}
        options={{title: 'Camera'}}
      />
      <CameraStackNavigator.Screen
        name="CameraDisplayPage"
        component={CameraDisplay}
        options={{title: 'Camera Snapshot'}}
      />
    </CameraStackNavigator.Navigator>
  );
};

const BeaconStackNavigator = createStackNavigator();

export const BeaconNavigator = () => {
  return (
    <BeaconStackNavigator.Navigator>
      <BeaconStackNavigator.Screen
        name="BeaconImagePage"
        component={BeaconImage}
        options={{title: 'Images and Beacon'}}
      />
    </BeaconStackNavigator.Navigator>
  );
};

const DateTimeStackNavigator = createStackNavigator();

export const DateTimeNavigator = () => {
  return (
    <DateTimeStackNavigator.Navigator>
      <DateTimeStackNavigator.Screen
        name="DateTimePage"
        component={DateTime}
        options={{title: 'Date and Time'}}
      />
    </DateTimeStackNavigator.Navigator>
  );
};

const GeoLoactionStackNavigator = createStackNavigator();

export const GeoLoactionNavigator = () => {
  return (
    <GeoLoactionStackNavigator.Navigator>
      <GeoLoactionStackNavigator.Screen
        name="GeoLocation"
        component={GeoLocation}
        options={{title: 'Live Location'}}
      />
    </GeoLoactionStackNavigator.Navigator>
  );
};
