import React, {useState} from 'react';
import {View, Image} from 'react-native';

interface Props {
  navigation: any;
  route: any;
}

interface State {}

class PushNotification extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const imagepath = this.props.route.params.image;
    return (
      <View>
        <Image source={{uri: imagepath}} style={{height: 100, width: 100}} />
      </View>
    );
  }
}

export default PushNotification;
