import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CalculatorScreen = () => {
  const [result, setResult] = useState('');

  const handleButtonPress = (buttonPressed) => {
    if (buttonPressed === '=') {
      calculateResult();
    } else if (buttonPressed === 'C') {
      setResult('');
    } else {
      setResult(result + buttonPressed);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+'],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => handleButtonPress(button)}>
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  result: {
    fontSize: 36,
    marginBottom: 20,
  },
  buttonsContainer: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default CalculatorScreen;
