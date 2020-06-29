import React, {useState, PureComponent} from 'react';

import {Text, StyleSheet, View, Alert, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import {RNCamera} from 'react-native-camera';

interface Props {
  navigation: any;
  route: any;
}

interface State {}
class CameraScren extends React.PureComponent<Props, State> {
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      //console.log(data.base64.substring(0, 20));
      this.props.navigation.navigate('CameraDisplayPage', {
        base64data: data.base64,
      });
    }
  };
  camera: any;

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />
        <View style={styles.bottom}>
          <Button
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
            type="solid"
            title="Take Photo"></Button>
        </View>
      </View>
    );
  }
}

async function getBase64(imageUri: string) {
  const filepath = imageUri.split('//')[1];
  const imageUriBase64 = await RNFS.readFile(filepath, 'base64');
  return `data:image/jpeg;base64,${imageUriBase64}`;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  preview: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
});

export default CameraScren;
