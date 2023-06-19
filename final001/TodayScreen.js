import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StepCountScreen from './StepCountScreen';

const TodayScreen = () => {
  const [toggleType, setToggleType] = useState(false);
  const [toggleTime, setToggleTime] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const sportActivities = ['Basketball', 'Football', 'Tennis', 'Swimming', 'Running'];
  const timeDurations = ['30min', '60min', '90min', '120min', '150min', '180min'];

  const handleToggleType = () => {
    setToggleType(!toggleType);
  };

  const handleToggleTime = () => {
    setToggleTime(!toggleTime);
  };

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today</Text>
      {selectedActivity && selectedTime && (
        <View style={styles.selectedValues}>
          <Text style={styles.selectedValuesText}>
            Selected Activity: {selectedActivity}
          </Text>
          <Text style={styles.selectedValuesText}>
            Selected Time: {selectedTime}
          </Text>
        </View>
      )}
      {(selectedActivity === 'Running' || selectedActivity === 'Walking') && (
        <StepCountScreen />
      )}
      <TouchableOpacity
        style={[
          styles.toggleButton,
          toggleType ? styles.toggleButtonPressed : null,
        ]}
        onPress={handleToggleType}
      >
        <Text style={styles.buttonText}>Type</Text>
      </TouchableOpacity>
      {toggleType && (
        <View style={styles.content}>
          {sportActivities.map((activity) => (
            <TouchableOpacity
              key={activity}
              style={[
                styles.activityButton,
                selectedActivity === activity && styles.selectedActivityButton,
              ]}
              onPress={() => handleActivitySelect(activity)}
            >
              <Text
                style={[
                  styles.activityButtonText,
                  selectedActivity === activity && styles.selectedActivityButtonText,
                ]}
              >
                {activity}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <TouchableOpacity
        style={[
          styles.toggleButton,
          toggleTime ? styles.toggleButtonPressed : null,
        ]}
        onPress={handleToggleTime}
      >
        <Text style={styles.buttonText}>Time</Text>
      </TouchableOpacity>
      {toggleTime && (
        <View style={styles.content}>
          {timeDurations.map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.timeButton,
                selectedTime === time && styles.selectedTimeButton,
              ]}
              onPress={() => handleTimeSelect(time)}
            >
              <Text
                style={[
                  styles.timeButtonText,
                  selectedTime === time && styles.selectedTimeButtonText,
                ]}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
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
  toggleButton: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  toggleButtonPressed: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontSize: 18,
  },
  content: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    marginBottom: 10,
  },
  activityButton: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedActivityButton: {
    backgroundColor: '#007AFF',
  },
  activityButtonText: {
    fontSize: 16,
  },
  selectedActivityButtonText: {
    color: '#FFF',
  },
  timeButton: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedTimeButton: {
    backgroundColor: '#007AFF',
  },
  timeButtonText: {
    fontSize: 16,
  },
  selectedTimeButtonText: {
    color: '#FFF',
  },
  selectedValues: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectedValuesText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default TodayScreen;
