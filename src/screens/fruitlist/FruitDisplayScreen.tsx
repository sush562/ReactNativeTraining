import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';

interface Props {
  navigation: any;
  route: any;
}

interface State {}

class FruitDisplayScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    this.props.navigation.setOptions({
      title: this.props.route.params.fruitname,
    });
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{uri: this.props.route.params.fruitpath}}></Image>
      </View>
    );
  }
}

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

// function updateTitle(props: any) {
//   props.navigation.setOptions({title: props.route.params.fruitname});
// }

// export const FruitDisplayOptions = {
//   title: {this.props.route.params.fruitname},
// };

export default FruitDisplayScreen;
