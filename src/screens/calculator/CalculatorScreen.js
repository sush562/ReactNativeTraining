import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import CalculatorButton from './CalculatorButton';

const CalculatorScreen = () => {
  const [result, setResult] = useState('');
  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');
  const [operator, setOperator] = useState('');
  return (
    <View style={styles.mainViewStyle}>
      <Text style={styles.resultStyle}>{result}</Text>
      <Text style={styles.operationStyle}>
        {param1} {operator} {param2}
      </Text>
      <View style={styles.buttonViewStyle}>
        <CalculatorButton
          textshown="Clear"
          onClear={() => {
            setParam1('');
            setParam2('');
            setOperator('');
            setResult('');
          }}
        />
        <CalculatorButton
          textshown="Backspace"
          onBackSpace={() => {
            backspace(
              param1,
              param2,
              operator,
              setParam1,
              setParam2,
              setOperator,
            );
          }}
        />
      </View>
      <View style={styles.buttonViewStyle}>
        <CalculatorButton
          textshown="+"
          setOperator={(operator) =>
            validateOperator(param1, setOperator, operator)
          }
        />
        <CalculatorButton
          textshown="-"
          setOperator={(operator) =>
            validateOperator(param1, setOperator, operator)
          }
        />
        <CalculatorButton
          textshown="*"
          setOperator={(operator) =>
            validateOperator(param1, setOperator, operator)
          }
        />
        <CalculatorButton
          textshown="/"
          setOperator={(operator) =>
            validateOperator(param1, setOperator, operator)
          }
        />
      </View>
      <View style={styles.buttonViewStyle}>
        <CalculatorButton
          textshown="7"
          setVal={(val) => {
            validateInput(param1, param2, operator, val, setParam1, setParam2);
          }}
        />
        <CalculatorButton
          textshown="8"
          setVal={(val) => {
            validateInput(param1, param2, operator, val, setParam1, setParam2);
          }}
        />
        <CalculatorButton
          textshown="9"
          setVal={(val) => {
            validateInput(param1, param2, operator, val, setParam1, setParam2);
          }}
        />
      </View>
      <View style={styles.buttonViewStyle}>
        <CalculatorButton
          textshown="4"
          setVal={(val) => {
            validateInput(param1, param2, operator, val, setParam1, setParam2);
          }}
        />
        <CalculatorButton
          textshown="5"
          setVal={(val) => {
            validateInput(param1, param2, operator, val, setParam1, setParam2);
          }}
        />
        <CalculatorButton
          textshown="6"
          setVal={(val) => {
            validateInput(param1, param2, operator, val, setParam1, setParam2);
          }}
        />
      </View>
      <View style={styles.buttonViewStyle}>
        <CalculatorButton
          textshown="1"
          setVal={(val) => {
            validateInput(param1, param2, operator, val, setParam1, setParam2);
          }}
        />
        <CalculatorButton
          textshown="2"
          setVal={(val) => {
            validateInput(param1, param2, operator, val, setParam1, setParam2);
          }}
        />
        <CalculatorButton
          textshown="3"
          setVal={(val) => {
            validateInput(param1, param2, operator, val, setParam1, setParam2);
          }}
        />
      </View>
      <View style={styles.buttonViewStyle}>
        <CalculatorButton
          textshown="0"
          setVal={(val) => {
            validateInput(param1, param2, operator, val, setParam1, setParam2);
          }}
        />
        {/* <CalculatorButton
          textshown="."
          setVal={(val) => {
            validateInput(param1, param2, operator, val, setParam1, setParam2);
          }}
        /> */}
        <CalculatorButton
          isdisabled={param1 && param2 && operator ? false : true}
          textshown="="
          calculate={() => calculate(param1, param2, operator, setResult)}
        />
      </View>
    </View>
  );
};

function validateOperator(param1, setOperator, operator) {
  if (param1) {
    setOperator(operator);
  }
}

function validateInput(param1, param2, operator, val, setParam1, setParam2) {
  if (operator) {
    if (!param2 && val == '0') {
      return;
    }
    setParam2(param2 + val);
  } else {
    if (!param1 && val == '0') {
      return;
    }
    setParam1(param1 + val);
  }
}

function backspace(
  param1,
  param2,
  operator,
  setParam1,
  setParam2,
  setOperator,
) {
  if (param2) {
    let val = param2.slice(0, -1);
    setParam2(val);
  } else if (operator) {
    setOperator('');
  } else if (param1) {
    let val = param1.slice(0, -1);
    setParam1(val);
  }
}

function calculate(param1, param2, operator, setResult) {
  let a = +param1;
  let b = +param2;
  switch (operator) {
    case '+':
      setResult(a + b);
      break;
    case '-':
      setResult(a - b);
      break;
    case '*':
      setResult(a * b);
      break;
    case '/':
      setResult(a / b);
      break;
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {},
  resultStyle: {
    alignSelf: 'stretch',
    padding: 20,
    textAlign: 'right',
    fontSize: 40,
    backgroundColor: 'rgb(112, 113, 198)',
    color: '#fff',
    margin: 1,
  },
  operationStyle: {
    alignSelf: 'stretch',
    padding: 20,
    margin: 1,
    textAlign: 'right',
    fontSize: 30,
    backgroundColor: 'rgb(48, 49, 126)',
    color: '#fff',
  },
  buttonViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(86, 88, 202)',
    margin: 1,
    height: 100,
  },
  buttonTextStyle: {
    color: '#fff',
    fontSize: 26,
  },
});

export default CalculatorScreen;
