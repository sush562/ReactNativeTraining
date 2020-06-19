import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const CalculatorButton = ({
  textshown,
  setOperator,
  onClear,
  setVal,
  calculate,
  isdisabled,
  onBackSpace,
}) => {
  return (
    <TouchableOpacity
      disabled={isdisabled}
      activeOpacity={isdisabled ? 1 : 0.7}
      style={[styles.buttonStyle]}
      onPress={() =>
        handlePress(
          textshown,
          setOperator,
          onClear,
          setVal,
          calculate,
          onBackSpace,
        )
      }>
      <Text style={styles.buttonTextStyle}>{textshown}</Text>
    </TouchableOpacity>
  );
};

function handlePress(
  tag,
  setOperator,
  onClear,
  setVal,
  calculate,
  onBackSpace,
) {
  switch (tag) {
    case '+':
    case '-':
    case '*':
    case '/':
      setOperator(tag);
      break;
    case 'Clear':
      onClear();
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      setVal(tag);
      break;
    case '=':
      calculate();
      break;
    case 'Backspace':
      onBackSpace();
      break;
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(25, 27, 111)',
    margin: 1,
    height: 60,
  },
  buttonTextStyle: {
    color: '#fff',
    fontSize: 26,
  },
});

export default CalculatorButton;
