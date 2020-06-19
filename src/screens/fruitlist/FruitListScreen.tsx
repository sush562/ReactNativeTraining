import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import {FRUITS} from '../../../shared/fruits';

interface Props {
  navigation: any;
}

const FruitListScreen: React.FC<Props> = (props) => {
  const [fruitslist] = useState(FRUITS);

  const renderMenuItem = ({item, index}) => {
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        hideCheveron={true}
        onPress={() => {
          props.navigation.navigate('FruitDisplay', {
            fruitpath: item.image,
            fruitname: item.name,
          });
        }}
        leftAvatar={{source: {uri: item.image}}}
      />
    );
  };

  return (
    <FlatList
      data={fruitslist}
      renderItem={renderMenuItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default FruitListScreen;
