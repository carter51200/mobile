import React, { useState, useRef } from 'react';
import { View, StyleSheet, TextInput, Button, Animated, TouchableOpacity, Text, Keyboard } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const GraphScreen = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [chartData, setChartData] = useState({
    labels: ['14', '15', '16', '17', '18', '19'],
    datasets: [
      {
        data: [120, 60, 90, 120, 180, 60],
        color: () => '#007AFF',
      },
    ],
  });

  const translateY = useRef(new Animated.Value(0)).current;

  const handleAddValue = () => {
    if (enteredValue.trim() !== '') {
      const updatedData = {
        labels: [...chartData.labels, String(chartData.labels.length + 14)],
        datasets: [
          {
            ...chartData.datasets[0],
            data: [...chartData.datasets[0].data, parseInt(enteredValue)],
          },
        ],
      };
      setChartData(updatedData);
      setEnteredValue('');
      animateUp(); // Trigger the animation when adding a value
    }
  };

  const animateUp = () => {
    Animated.timing(translateY, {
      toValue: -200,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const removeNumberPlate = () => {
    Keyboard.dismiss(); // Hide the number pad
    animateDown(); // Trigger the animation to move the number plate down
  };

  const animateDown = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const chartConfig = {
    backgroundGradientFrom: '#F5F5F5',
    backgroundGradientTo: '#F5F5F5',
    color: () => '#007AFF',
    decimalPlaces: 0,
    formatYLabel: (value) => `${value} min`,
    verticalLabelRotation: 0,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.numberPlateContainer, { transform: [{ translateY }] }]}>
        <View style={styles.numberPlate}>
          <LineChart
            data={chartData}
            width={400}
            height={400}
            chartConfig={chartConfig}
            withVerticalLines={false}
            withHorizontalLines={false}
            withShadow={false}
            bezier
          />
        </View>
        <TouchableOpacity style={styles.removeButton} onPress={removeNumberPlate}>
          <Text style={styles.removeButtonText}>Remove Number Plate</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.inputContainer, { transform: [{ translateY }] }]}>
        <TextInput
          style={styles.input}
          value={enteredValue}
          onChangeText={setEnteredValue}
          placeholder="Enter a value"
          onFocus={animateUp} // Trigger the animation when the input is focused
          onBlur={animateDown} // Trigger the animation when the input loses focus
          keyboardType="numeric"
        />
        <Button title="Add" onPress={handleAddValue} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  numberPlateContainer: {
    marginBottom: -50, // Adjust the margin here
  },
  numberPlate: {
    height: 400,
    width: 400,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  removeButton: {
    marginTop: -20, // Adjust the margin here
    alignSelf: 'center',
  },
  removeButtonText: {
    color: 'red',
    fontSize: 16,
  },
});

export default GraphScreen;
