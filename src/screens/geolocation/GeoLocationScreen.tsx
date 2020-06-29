import React, {Component} from 'react';

import {Text, StyleSheet, View, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import Geolocation from '@react-native-community/geolocation';

interface Props {
  navigation: any;
  route: any;
}

interface State {
  latitude: any;
  longitude: any;
  error: any;
}

class GeoLocation extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => {
        this.setState({error: error.message});
      },
      {enableHighAccuracy: false, timeout: 30000, maximumAge: 1000},
    );
  }
  render() {
    return (
      <View
        style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        <Button
          buttonStyle={styles.buttonStyle}
          type="solid"
          title="Stop Location Tracking"
          onPress={() => {
            Geolocation.stopObserving();
          }}
        />
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

export default GeoLocation;
