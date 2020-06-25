import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import {ListItem} from 'react-native-elements';
import {ACTORS} from '../../../shared/actors';

interface Props {
  navigation: any;
  route: any;
}

interface State {
  actorlist: any;
}

export class LoginSuccess extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      actorlist: ACTORS,
    };
  }

  renderMenuItem = ({item, index}: any) => {
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        onPress={() => {
          this.props.navigation.navigate('ActorDetail', {
            actorid: item.id,
          });
        }}
        leftAvatar={{source: {uri: item.photo}}}
      />
    );
  };

  render() {
    return (
      <View>
        <Button
          type="solid"
          title="Go Back"
          buttonStyle={styles.buttonStyle}
          onPress={() => this.props.navigation.goBack()}
        />
        <FlatList
          data={this.state.actorlist}
          renderItem={this.renderMenuItem}
          keyExtractor={(item) => item.id.toString()}
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

export default LoginSuccess;
