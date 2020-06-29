import React, {useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {Notifications} from 'react-native-notifications';

interface Props {
  navigation: any;
  route: any;
}

interface State {
  timer: any;
  counter: number;
}

class LocalNotification extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      timer: null,
      counter: 5,
    };
  }

  displayNotification() {
    Notifications.postLocalNotification(
      {
        title: 'Test',
        body: 'Body',
        identifier: '',
        payload: '',
        sound: '',
        badge: 0,
        type: '',
        thread: '',
      },
      5,
    );
  }

  startTimer() {
    let newtimer = setInterval(() => this.tick(), 1000);
    console.log(typeof newtimer);
    this.setState({
      timer: newtimer,
    });
  }

  stopTimer() {
    clearInterval(this.state.timer);
    this.setState({
      timer: null,
    });
  }

  async tick() {
    this.setState({
      counter: this.state.counter - 1,
    });
    if (this.state.counter == 0) {
      this.displayNotification();
      this.setState({
        counter: 5,
      });
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    return (
      <View>
        <Button
          buttonStyle={styles.buttonStyle}
          type="solid"
          title="Start Timer"
          onPress={() => {
            this.startTimer();
          }}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          type="solid"
          title="Stop Timer"
          onPress={() => {
            this.stopTimer();
          }}
        />
        <Text>
          {this.state.timer === null
            ? null
            : `Next Notification in ${this.state.counter} seconds`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
});

export default LocalNotification;
