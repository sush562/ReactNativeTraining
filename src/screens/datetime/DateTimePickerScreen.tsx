import React, {Component} from 'react';

import {Text, StyleSheet, View, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

interface Props {
  navigation: any;
  route: any;
}

interface State {
  selectedvalue: any;
  show: boolean;
  mode: string;
}

class DateTimePickerScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedvalue: new Date(),
      show: false,
      mode: 'date',
    };
  }

  setMode(val: string) {
    this.setState({
      mode: val,
      show: true,
    });
  }

  async onChange(event: any, selectedDate: any) {
    if (selectedDate) {
      this.setState({
        show: false,
        selectedvalue: selectedDate,
      });
    }
  }

  render() {
    return (
      <View>
        <Button
          buttonStyle={styles.buttonStyle}
          type="solid"
          title="Select Date"
          onPress={() => {
            this.setMode('date');
          }}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          type="solid"
          title="Select Time"
          onPress={() => {
            this.setMode('time');
          }}
        />
        <Text style={styles.textStyle}>
          {this.state.selectedvalue
            ? `Selected Date is ${moment(this.state.selectedvalue).format(
                'MMM Do, YYYY',
              )} and Time is ${moment(this.state.selectedvalue).format(
                'h:mm:ss a',
              )}`
            : null}
        </Text>
        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.selectedvalue}
            mode={this.state.mode}
            is24Hour={true}
            display="default"
            onChange={this.onChange.bind(this)}
          />
        )}
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
  textStyle: {
    margin: 10,
  },
});

export default DateTimePickerScreen;
