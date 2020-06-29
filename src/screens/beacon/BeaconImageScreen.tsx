import React, {Component} from 'react';
import {Text, StyleSheet, View, DeviceEventEmitter, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import {FRUITS} from '../../../shared/fruits';
//import Beacons from 'react-native-beacons-manager';

interface Props {
  navigation: any;
  route: any;
}

interface State {
  fruitlist: {
    id: number;
    image: string;
    name: string;
  }[];
  counter: number;
}

class BeaconImageScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      fruitlist: FRUITS,
      counter: 0,
    };
  }

  async componentDidMount() {
    // Beacons.detectIBeacons();
    // try {
    //   await Beacons.startRangingBeaconsInRegion('REGION1');
    //   console.log(`Beacons ranging started succesfully!`);
    // } catch (err) {
    //   console.log(`Beacons ranging not started, error: ${err}`);
    // }
    // // Print a log of the detected iBeacons (1 per second)
    // DeviceEventEmitter.addListener('beaconsDidRange', (data) => {
    //   console.log('Found beacons!', data.beacons);
    // });
  }

  render() {
    const path = this.state.fruitlist[this.state.counter].image;
    return (
      <View style={styles.mainContainerStyle}>
        <Image source={{uri: path}} style={styles.imageView} />
        <View style={styles.buttonViewStyle}>
          <Button
            buttonStyle={styles.buttonStyle}
            type="solid"
            title="Back"
            onPress={() => {
              this.setState({
                counter: this.state.counter === 0 ? 0 : this.state.counter - 1,
              });
            }}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            type="solid"
            title="Next"
            onPress={() => {
              this.setState({
                counter:
                  this.state.counter === this.state.fruitlist.length - 1
                    ? this.state.fruitlist.length - 1
                    : this.state.counter + 1,
              });
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    flexDirection: 'column',
  },
  buttonViewStyle: {
    alignContent: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 30,
  },
  imageView: {
    width: '100%',
    height: 300,
    resizeMode: 'stretch',
  },
  buttonStyle: {
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
});

export default BeaconImageScreen;
