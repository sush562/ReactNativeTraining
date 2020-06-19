import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';

interface Props {
  navigation: any;
  route: any;
}

const FruitDisplayScreen: React.FC<Props> = (props) => {
  const path = props.route.params.fruitpath;
  console.log(path);
  updateTitle(props);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri: path}}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: '100%',
    height: 400,
    resizeMode: 'stretch',
  },
});

function updateTitle(props: any) {
  props.navigation.setOptions({title: props.route.params.fruitname});
}

export default FruitDisplayScreen;
