import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  MobileListNavigator,
  HomeNavigator,
  LoginNavigator,
  FruitNavigator,
  CalculatorNavigator,
  PlaylistNavigator,
  NotificationNavigator,
  CameraNavigator,
} from '../navigator/AppNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
import {Alert} from 'react-native';

type State = {};
type Props = {};

class Main extends React.Component<Props, State> {
  state = {
    initialRoute: 'Home',
  };

  async componentDidMount() {
    //we check if user has granted permission to receive push notifications.
    this.checkPermission();
    // Register all listener for notification
    this.createNotificationListeners();
  }

  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    // If Premission granted proceed towards token fetch
    if (enabled) {
      this.getToken();
    } else {
      // If permission hasn’t been granted to our app, request user in requestPermission method.
      this.requestPermission();
    }
  }
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log(fcmToken);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      console.log(fcmToken);
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  async createNotificationListeners() {
    // This listener triggered when notification has been received in foreground
    firebase.notifications().onNotification((notification) => {
      console.log('Notification 1');
      console.log(notification);
      const {key_image_url, key_message, key_integer} = notification.data;
      this.displayNotification(key_image_url, key_message, key_integer);
    });

    // This listener triggered when app is in backgound and we click, tapped and opened notifiaction
    firebase.notifications().onNotificationOpened((notificationOpen) => {
      console.log('Notification 2');
      console.log(notificationOpen);
      const {
        key_image_url,
        key_message,
        key_integer,
      } = notificationOpen.notification.data;
      this.displayNotification(key_image_url, key_message, key_integer);
    });

    // This listener triggered when app is closed and we click,tapped and opened notification
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      console.log('Notification 3');
      console.log(notificationOpen);
      const {
        key_image_url,
        key_message,
        key_integer,
      } = notificationOpen.notification.data;
      this.displayNotification(key_image_url, key_message, key_integer);
    }
  }

  displayNotification(title: string, body: string, key_integer: string) {
    // we display notification in alert box with title and body
    // Alert.alert(
    //   key_integer,
    //   body + title,
    //   [{text: 'Ok', onPress: () => console.log('ok pressed')}],
    //   {cancelable: false},
    // );
    console.log(title);
    this.state.initialRoute = 'Mobile List';
  }

  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={this.state.initialRoute}>
          <Drawer.Screen name="Home" component={HomeNavigator} />
          <Drawer.Screen name="Mobile List" component={MobileListNavigator} />
          <Drawer.Screen name="Login" component={LoginNavigator} />
          <Drawer.Screen name="Fruit List" component={FruitNavigator} />
          <Drawer.Screen name="Calculator" component={CalculatorNavigator} />
          <Drawer.Screen name="Play List" component={PlaylistNavigator} />
          <Drawer.Screen
            name="Local Notification"
            component={NotificationNavigator}
          />
          <Drawer.Screen name="Camera" component={CameraNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default Main;
