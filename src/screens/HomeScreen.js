import React, { useState } from 'react';

import { Text, StyleSheet, View, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const HomeScreen = (props) => {
  const [inputValue, setInputValue] = useState('')
  const [displayValue, setDisplayValue] = useState('')

  return (
    <View>
      <Text style={styles.headerTextStyle}>{displayValue ? displayValue : 'This is header title'}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(newValue) => setInputValue(newValue)}
      />
      <Button
        style={styles.buttonStyle}
        title="Set Title"
        onPress={() => {
          if (inputValue) {
            setDisplayValue(inputValue)
          } else {
            Alert.alert(
              "Error",
              "Please enter some text"
            )
          }

        }}
      />
      <Button
        style={styles.button}
        title="Go to Mobile List Screen"
        onPress={() => props.navigation.navigate('MobileList')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 25,
    fontStyle: 'italic',
    padding: 10
  },
  input: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
    paddingStart: 10,
    paddingEnd: 10,
    backgroundColor: "#ffffff"
  },
  button: {
    marginTop: 5
  }
});

export default HomeScreen;
