import React, {useState} from 'react';

import {Text, StyleSheet, View, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  return (
    <View>
      <Text style={styles.headerTextStyle}>
        {displayValue ? displayValue : 'This is header title'}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(newValue) => setInputValue(newValue)}
      />
      <Button
        buttonStyle={styles.buttonStyle}
        type="solid"
        title="Set Title"
        onPress={() => {
          if (inputValue) {
            setDisplayValue(inputValue);
          } else {
            Alert.alert('Error', 'Please enter some text');
          }
        }}
      />
      <Button
        type="solid"
        title="Go to Mobile List Screen"
        buttonStyle={styles.buttonStyle}
        onPress={() => props.navigation.navigate('MobileList')}
      />
      <Button
        type="solid"
        title="Go to Login Screen"
        buttonStyle={styles.buttonStyle}
        onPress={() => props.navigation.navigate('Login')}
      />
      <Button
        type="solid"
        title="Go to Fruit List Screen"
        buttonStyle={styles.buttonStyle}
        onPress={() => props.navigation.navigate('FruitList')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 25,
    fontStyle: 'italic',
    padding: 10,
  },
  input: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
    paddingStart: 10,
    paddingEnd: 10,
    backgroundColor: '#ffffff',
  },
  buttonStyle: {
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
});

export default HomeScreen;
