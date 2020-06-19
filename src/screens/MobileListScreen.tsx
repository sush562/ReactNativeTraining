import React, {useState} from 'react';

import {Text, StyleSheet, View, Button, FlatList, Alert} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
interface Props {
  navigation: any;
}
const MobileListScreen: React.FC<Props> = (props) => {
  const mobilecompanies = [
    {name: 'Acer', count: 100, id: 1},
    {name: 'Alcatel', count: 396, id: 2},
    {name: 'Allview', count: 154, id: 3},
    {name: 'Amazon', count: 19, id: 4},
    {name: 'Amoi', count: 47, id: 5},
    {name: 'Apple', count: 78, id: 6},
    {name: 'Archos', count: 43, id: 7},
    {name: 'Asus', count: 178, id: 8},
    {name: 'AT&T', count: 4, id: 9},
    {name: 'Benefon', count: 9, id: 10},
    {name: 'Benq', count: 35, id: 11},
    {name: 'Bird', count: 61, id: 12},
    {name: 'Blackberry', count: 92, id: 13},
    {name: 'Blackview', count: 6, id: 14},
    {name: 'Blu', count: 308, id: 15},
    {name: 'Bosch', count: 10, id: 16},
    {name: 'BQ', count: 10, id: 17},
    {name: 'Casio', count: 5, id: 18},
    {name: 'Cat', count: 15, id: 19},
    {name: 'Celkon', count: 229, id: 20},
    {name: 'Chea', count: 12, id: 21},
    {name: 'Coolpad', count: 33, id: 22},
    {name: 'Dell', count: 20, id: 24},
    {name: 'Emporia', count: 15, id: 25},
    {name: 'Energizer', count: 48, id: 26},
    {name: 'Ericsson', count: 40, id: 27},
    {name: 'Eten', count: 22, id: 28},
    {name: 'Gigabyte', count: 63, id: 29},
    {name: 'Gionee', count: 80, id: 30},
    {name: 'Google', count: 12, id: 31},
    {name: 'Haier', count: 59, id: 32},
    {name: 'Honor', count: 91, id: 33},
    {name: 'HP', count: 41, id: 34},
    {name: 'HTC', count: 265, id: 35},
    {name: 'Huawei', count: 327, id: 36},
    {name: 'Infinix', count: 46, id: 37},
    {name: 'Inq', count: 5, id: 38},
    {name: 'Intex', count: 15, id: 39},
    {name: 'Jolla', count: 3, id: 40},
    {name: 'Karbonn', count: 60, id: 41},
    {name: 'Lava', count: 117, id: 42},
    {name: 'Lenovo', count: 204, id: 43},
    {name: 'LG', count: 647, id: 44},
    {name: 'Meizu', count: 61, id: 45},
    {name: 'Micromax', count: 283, id: 46},
    {name: 'Microsoft', count: 30, id: 47},
    {name: 'Motorola', count: 492, id: 48},
    {name: 'Nokia', count: 498, id: 49},
    {name: 'Oneplus', count: 21, id: 50},
    {name: 'Oppo', count: 131, id: 51},
    {name: 'Orange', count: 19, id: 52},
    {name: 'Palm', count: 17, id: 53},
    {name: 'Panasonic', count: 123, id: 54},
    {name: 'Philips', count: 227, id: 55},
    {name: 'Realme', count: 37, id: 56},
    {name: 'Samsung', count: 1239, id: 57},
    {name: 'Sony Ericsson', count: 188, id: 58},
    {name: 'T-Mobile', count: 55, id: 59},
    {name: 'Vivo', count: 146, id: 60},
    {name: 'Xiomi', count: 152, id: 61},
    {name: 'Xolo', count: 81, id: 62},
    {name: 'Yu', count: 13, id: 63},
    {name: 'ZTE', count: 273, id: 64},
  ];

  const showAlert = (name: string) => {
    Alert.alert('Name of Company', name, [
      {
        text: 'Ok',
      },
    ]);
  };

  return (
    <View>
      <FlatList
        //horizontal
        //showsHorizontalScrollIndicator={false}
        style={styles.flatListStyle}
        keyExtractor={(company) => company.id.toString()}
        data={mobilecompanies}
        renderItem={({item}) => {
          return (
            <TouchableHighlight
              onPress={() => {
                showAlert(item.name);
              }}>
              <Text style={styles.listTextStyle}>
                {item.name} - Number of Device: {item.count}
              </Text>
            </TouchableHighlight>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    margin: 10,
  },
  listTextStyle: {
    margin: 2,
    height: 30,
    paddingStart: 10,
    alignSelf: 'stretch',
  },
});

export default MobileListScreen;
