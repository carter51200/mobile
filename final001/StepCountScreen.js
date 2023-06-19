import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';

export default function App() {
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    const subscribeToPedometer = async () => {
      const isAvailable = await Pedometer.isAvailableAsync();
      if (isAvailable) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        Pedometer.getStepCountAsync(today, new Date())
          .then(result => {
            setStepCount(result.steps);
          })
          .catch(error => {
            console.log("Error getting step count: ", error);
          });

        const subscription = Pedometer.watchStepCount(result => {
          setStepCount(result.steps);
        });

        return () => {
          subscription.remove();
        };
      } else {
        console.log("Pedometer is not available on this device.");
      }
    };

    subscribeToPedometer();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step Count Tracker</Text>
      <Text style={styles.stepCount}>Step Count: {stepCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  stepCount: {
    fontSize: 18,
  },
});
