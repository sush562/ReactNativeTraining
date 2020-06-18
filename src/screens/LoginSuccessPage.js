import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

const LoginSuccess = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>
        Entered username: {props.route.params.usernameval}
      </Text>
      <Text style={styles.textStyle}>
        Entered password: {props.route.params.passwordval}
      </Text>
      <Button
        type="solid"
        title="Go Back"
        buttonStyle={styles.buttonStyle}
        onPress={() => props.navigation.goBack()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
  textStyle: {
    marginStart: 10,
    marginTop: 10,
    fontSize: 20,
  },
});

export default LoginSuccess;
