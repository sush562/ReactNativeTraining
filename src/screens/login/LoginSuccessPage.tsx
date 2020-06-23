import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import {ListItem} from 'react-native-elements';
import {ACTORS} from '../../../shared/actors';

interface Props {
  navigation: any;
  route: any;
}

const LoginSuccess: React.FC<Props> = (props) => {
  const [fruitslist] = useState(ACTORS);
  const renderMenuItem = ({item, index}: any) => {
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        // onPress={() => {
        //   props.navigation.navigate('LoginSuccess', {
        //     actorid: item.id,
        //   });
        // }}
        leftAvatar={{source: {uri: item.photo}}}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={fruitslist}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        type="solid"
        title="Go Back"
        buttonStyle={styles.buttonStyle}
        onPress={() => props.navigation.goBack()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
});

export default LoginSuccess;
