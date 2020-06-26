import React, {useState, Component} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {ListItem} from 'react-native-elements';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  navigation: any;
}

interface State {
  playlist: {
    id: string;
    name: string;
    images: [
      {
        url: string;
      },
    ];
  }[];
  isfetched: boolean;
}

export class PlayList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      playlist: [],
      isfetched: false,
    };
  }

  async componentDidMount() {
    const value = await AsyncStorage.getItem('key_playlist');
    if (value != null) {
      const list = JSON.parse(value);
      console.log('Fetch from storage');
      this.setState({playlist: list, isfetched: true});
    } else {
      console.log('Fetch online');
      axios
        .get(
          'https://api.napster.com/v2.0/playlists?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm',
        )
        .then((res) => {
          const list = res.data.playlists;
          const jsonValue = JSON.stringify(list);
          AsyncStorage.setItem('key_playlist', jsonValue);
          this.setState({playlist: list, isfetched: true});
        })
        .catch((e) => console.log(e));
    }
  }

  render() {
    return (
      <View>
        {!this.state.isfetched && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
        {this.state.isfetched && (
          <FlatList
            data={this.state.playlist}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    );
  }
}

function renderItem({item, index}) {
  return (
    <ListItem
      key={index}
      title={item.name}
      leftAvatar={{source: {uri: item.images[0].url}}}
    />
  );
}

export default PlayList;
