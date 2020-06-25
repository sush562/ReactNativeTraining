import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {ACTORS} from '../../../shared/actors';
import moment from 'moment';

interface Props {
  navigation: any;
  route: any;
}

interface State {
  actorlist: {
    id: number;
    name: string;
    dob: string;
    placeofbirth: string;
    photo: string;
  }[];
}

export class ActorDetail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      actorlist: ACTORS,
    };
  }

  render() {
    const id = this.props.route.params.actorid;
    console.log(id);
    const actor = this.state.actorlist.filter((actor) => actor.id === id)[0];
    console.log(actor.name);
    this.props.navigation.setOptions({
      title: actor.name,
    });
    const formatDate = moment(actor.dob, 'YYYY-MM-DD', true).format(
      'MMM Do, YYYY',
    );
    return (
      <View style={styles.mainViewStyle}>
        <Image style={styles.ImageStyle} source={{uri: actor.photo}} />
        <View style={styles.innerViewStyle}>
          <Text style={[styles.textStyle, styles.nameTextStyle]}>
            {actor.name}
          </Text>
          <Text style={styles.textStyle}>
            Place Of Birth: {actor.placeofbirth}
          </Text>
          <Text style={styles.textStyle}>DOB: {formatDate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ImageStyle: {
    width: 150,
    height: 200,
    margin: 10,
    resizeMode: 'stretch',
  },
  mainViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    marginTop: 10,
  },
  nameTextStyle: {
    fontSize: 30,
    fontStyle: 'italic',
  },
  innerViewStyle: {
    width: 0,
    flexGrow: 1,
  },
});

export default ActorDetail;
