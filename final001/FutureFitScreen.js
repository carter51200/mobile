import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FutureFitScreen = () => {
  // Sample workout data
  const workoutData = [
    { date: '2023-06-01', caloriesBurned: 300 },
    { date: '2023-06-03', caloriesBurned: 350 },
    { date: '2023-06-05', caloriesBurned: 400 },
    { date: '2023-06-07', caloriesBurned: 380 },
    // Add more workout data here
  ];

  // Calculate average calories burned per workout
  const totalCaloriesBurned = workoutData.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );
  const averageCaloriesBurned = totalCaloriesBurned / workoutData.length;

  // Estimate future improvement
  const futureDays = 30;
  const futureCaloriesBurned = averageCaloriesBurned * futureDays;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FutureFit Analysis</Text>
      <Text style={styles.subHeading}>Workout Progress</Text>
      <Text>
        Total workouts: {workoutData.length}, Average calories burned per
        workout: {averageCaloriesBurned.toFixed(2)}
      </Text>
      <Text style={styles.subHeading}>Future Projection</Text>
      <Text>
        Estimated calories burned in the next {futureDays} days: {futureCaloriesBurned.toFixed(2)}
      </Text>
      {/* Add additional visualizations here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default FutureFitScreen;
