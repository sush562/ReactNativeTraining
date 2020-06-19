import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Text, StyleSheet, View, Alert} from 'react-native';
import {Button} from 'react-native-elements';

interface Props {
  navigation: any;
}

const LoginScreen: React.FC<Props> = (props) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text style={styles.textStyle}>User Name</Text>
      <TextInput
        style={styles.input}
        maxLength={40}
        textContentType="username"
        onChangeText={(newValue) => setUserName(newValue)}
      />
      <Text style={styles.textStyle}>Password</Text>
      <TextInput
        style={styles.input}
        maxLength={40}
        secureTextEntry={true}
        textContentType="password"
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <Button
        type="solid"
        maxLength={20}
        title="Login"
        buttonStyle={styles.buttonStyle}
        onPress={() => validate(props, username, password)}
      />
    </View>
  );
};

function validate(props: any, username: string, password: string) {
  if (!username) {
    Alert.alert('Error', 'Please enter username');
    return;
  }
  if (!password) {
    Alert.alert('Error', 'Please enter password');
    return;
  }
  props.navigation.navigate('LoginSuccess', {
    usernameval: username,
    passwordval: password,
  });
}

const styles = StyleSheet.create({
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
  textStyle: {
    marginStart: 10,
    marginTop: 10,
    fontSize: 20,
  },
});

export default LoginScreen;
