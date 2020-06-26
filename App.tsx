import React from 'react';
import MainScreen from './src/screens/MainScreen';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
import {Alert} from 'react-native';

class App extends React.Component {
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
      const {title, body} = notification;
      this.displayNotification(title, body);
    });

    // This listener triggered when app is in backgound and we click, tapped and opened notifiaction
    firebase.notifications().onNotificationOpened((notificationOpen) => {
      console.log('Notification 2');
      console.log(notificationOpen);
      const {title, body} = notificationOpen.notification;
      this.displayNotification(title, body);
    });

    // This listener triggered when app is closed and we click,tapped and opened notification
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      console.log('Notification 3');
      console.log(notificationOpen);
      const {title, body} = notificationOpen.notification;
      this.displayNotification(title, body);
    }
  }

  displayNotification(title: string, body: string) {
    // we display notification in alert box with title and body
    Alert.alert(
      title,
      body,
      [{text: 'Ok', onPress: () => console.log('ok pressed')}],
      {cancelable: false},
    );
  }

  render() {
    return <MainScreen />;
  }
}

export default App;
