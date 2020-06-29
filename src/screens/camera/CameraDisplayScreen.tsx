import React, {Component} from 'react';

import {View, Image} from 'react-native';

interface Props {
  navigation: any;
  route: any;
}

interface State {}

class CameraDisplayScreen extends Component<Props, State> {
  render() {
    const data = 'data:image/jpeg;base64,' + this.props.route.params.base64data;
    return (
      <View>
        <Image source={{uri: data}} style={{height: 400, width: '100%'}} />
      </View>
    );
  }
}

export default CameraDisplayScreen;
